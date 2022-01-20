// eslint config for vue projects
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["./base", "plugin:vue/essential"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["vue"],
  rules: {
    "no-console": "warn",
  },
  overrides: [
    {
      files: "tests/**/*.js",
      rules: { "no-console": "off" },
    },
  ],
};
