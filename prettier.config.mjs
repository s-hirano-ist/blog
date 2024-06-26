/** @type {import("prettier").Options} */

const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "avoid",
  rangeStart: 0,
  rangeEnd: Infinity,
  // parser: None,
  // filepath: None,
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  tailwindConfig: "./tailwind.config.mjs",
  tailwindFunctions: ["clsx"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};

export default config;
