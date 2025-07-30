import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: {
        parserOptions: {
          project: "./tsconfig.json",
          ecmaVersion: 2020,
          sourceType: "module",
          ecmaFeatures: {
            jsx: true
          }
        }
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-function-return-type": ["warn"],
      "@typescript-eslint/no-explicit-any": ["warn"],
      "@typescript-eslint/no-inferrable-types": ["warn"],
      "@typescript-eslint/no-empty-interface": ["warn"]
    }
  }
];

export default eslintConfig;
