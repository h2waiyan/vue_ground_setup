module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "parser": "@typescript-eslint/parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-undef": process.env.NODE_ENV === "production" ? "warn" : "off",
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',
    } 
  }],
  /* Put your global variables here(like Jquery,Lodash,etc...),to avoid 'no-undef' error */
  globals: {
    /* KeenThemes */
    KTApp: 'readonly',

    $: 'readonly',
  },
};
