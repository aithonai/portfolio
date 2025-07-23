import litPlugin from 'eslint-plugin-lit';
import wcPlugin from 'eslint-plugin-wc';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2024, // O la versión más reciente que uses
      sourceType: "module",
      globals: { browser: true },
    },

    plugins: {
      lit: litPlugin,
      wc: wcPlugin,
    },

    rules: {
      "no-unused-vars": "warn",
    },

    settings: {
      wc: {
        elementBaseClasses: ["LitElement", "HTMLElement"],
      },
    },
  }
];