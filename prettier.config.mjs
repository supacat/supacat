const config = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "es5",
  semi: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "^[./]",
    "",
    ".css$",
  ],
  tailwindFunctions: ["cn", "clsx", "cva"],
};

export default config;
