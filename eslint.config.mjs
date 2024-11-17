// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";

export default {

  overrides: [
    {
      files: ["**/*.js"],
      excludedFiles: ["**/*.test.js"],
      languageOptions: {
        sourceType: "commonjs",
        globals: globals.node,
      },
      rules: {
     
        "no-unused-vars": "error",
        "no-undef": "error",       
        "no-console": "warn",     
      },
    },
  ],
  ...pluginJs.configs.recommended,
};
