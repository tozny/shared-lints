// tozny's base eslint configuration!
module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    // ecmaVersion: 2018,
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  globals: {
    console: "readonly",
  },
  rules: {
    // "eol-last": ["error", "always"],
    // quotes: ["error", "single", { avoidEscape: true }],
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
