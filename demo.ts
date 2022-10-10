import { genTWStylesheet } from "./gen-tw-stylesheet.ts";

const inputHTML = `<div class="flex-none w-48 relative"></div>`;

console.time("Generating CSS");
const css = await genTWStylesheet(inputHTML, {
  minify: true,
});
console.log(css);
console.timeEnd("Generating CSS");
