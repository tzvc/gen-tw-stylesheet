### About

Generate CSS from TW classnames. This makes use of a modified version of [Tailwind CSS](https://tailwindcss.com/) that has been modified to be compatible with the Deno runtime. The modified version is available at https://github.com/tzvc/tailwindcss-deno

### Pre Requirement

Ugrade Deno to version 1.25 or higher
```bash
deno upgrade
```
Note: This is required to make use of the experimental npm support (see: https://deno.com/blog/v1.25#experimental-npm-support)

### Usage

Run the demo script
```bash
deno run --unstable --allow-env --allow-read demo.ts
```
