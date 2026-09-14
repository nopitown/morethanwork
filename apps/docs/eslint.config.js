import { config } from "@repo/eslint-config/react-internal";
export default [
  ...config,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        babelOptions: { presets: ["@babel/preset-typescript"], parserOpts: { plugins: ["jsx"] } },
      },
    },
    rules: { "no-undef": "off", "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z]" }] },
  },
  { ignores: ["storybook-static/**"] },
];
