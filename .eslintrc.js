/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require("fs")
const path = require("path")

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, ".prettierrc.json"), "utf8"),
)

module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["prettier", "@typescript-eslint", "unused-imports"],
    rules: {
        "array-callback-return": "error",
        "prettier/prettier": ["error", prettierOptions],
        "comma-dangle": ["error", "always-multiline"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "space-before-function-paren": ["off"],
        "@typescript-eslint/no-empty-function": [
            "error",
            { allow: ["constructors"] },
        ],
        "@typescript-eslint/quotes": [
            "error",
            "double",
            { allowTemplateLiterals: true },
        ],
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/semi": [
            "error",
            "never",
            { beforeStatementContinuationChars: "never" },
        ],
        "no-console": "error",
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            rules: { "prettier/prettier": ["warn", prettierOptions] },
        },
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["lib/**/*"],
}
