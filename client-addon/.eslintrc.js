module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? 1 : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "comma-dangle": [1, "always-multiline"]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    ClientAddonApi: false,
    mapSharedData: false,
    Vue: false
  }
};
