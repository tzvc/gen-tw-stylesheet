import tailwindcss from "npm:tailwindcss-deno@3.1.10";
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

console.log(
  await genTWStylesheet(`<div class="flex-none w-48 relative"></div>`, {
    minify: true,
  })
);
