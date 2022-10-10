import { reset } from "https://deno.land/std@0.109.0/fmt/colors.ts";
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { genTWStylesheet } from "./gen-tw-stylesheet.ts";

serve(async (req: Request) => {
  try {
    const body = await req.json();
    const css = await genTWStylesheet(body.html, {
      minify: true,
    });
    return new Response(css);
  } catch (e) {
    return new Response(`Could not generate stylesheet. Reason: ${e.message}`, {
      status: 400,
    });
  }
});
