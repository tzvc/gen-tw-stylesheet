import tailwindcss from "npm:tailwindcss-deno";
import postcss from "https://deno.land/x/postcss/mod.js";
import autoprefixer from "https://esm.sh/autoprefixer";
import cssnano from "npm:cssnano";

const baseCss = `@tailwind base; @tailwind components; @tailwind utilities;`;

export const genTWStylesheet = async (
  html: string,
  options: { minify: boolean } = { minify: false }
) => {
  try {
    const twConfig = {};
    const result = await postcss([
      tailwindcss({
        ...twConfig,
        content: [{ raw: html, extension: "html" }],
      }),
      autoprefixer,
      ...(options.minify ? [cssnano] : []),
    ])
      .process(baseCss)
      .async();

    return result.css;
  } catch (e) {
    throw new Error(`Could not generate stylesheet. Reason: ${e.message}`);
  }
};
