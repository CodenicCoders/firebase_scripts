module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "/build/**/*", // Ignore built files.
    ".eslintrc.js",
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    quotes: ["error", "double"],
    "quote-props": ["error", "as-needed"],
    indent: ["error", 2],
    "import/no-unresolved": 0,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "max-len":["error", { ignoreStrings: true, ignoreUrls: true }],
    "valid-jsdoc": [
      "error", {
        prefer: {
          return: "returns",
        },
        requireParamType: false,
        requireReturnType: false,
      },
    ],
    "linebreak-style": 0,
    "jsdoc/require-param-type": 0,
    "jsdoc/require-returns-type": 0,
    "jsdoc/require-jsdoc": [
      "error", {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          "ArrowFunctionExpression",
          "ClassDeclaration",
          "ClassExpression",
          "ClassProperty",
          "FunctionDeclaration",
          "FunctionExpression",
          "MethodDefinition",
          "TSDeclareFunction",
          "TSEnumDeclaration",
          "TSInterfaceDeclaration",
          "TSModuleDeclaration",
          "TSTypeAliasDeclaration",
        ],
      },
    ],
  },
};
