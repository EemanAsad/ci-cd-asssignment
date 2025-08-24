import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommended: true,
});

export default [
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js"],
    rules: {
      "no-console": "off",
    },
  },
];
