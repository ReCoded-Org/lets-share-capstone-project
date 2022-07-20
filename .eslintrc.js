module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        "jest/globals": true,
    },
    plugins: ["simple-import-sort", "unused-imports", "jest"],
    extends: ["eslint:recommended", "next", "next/core-web-vitals", "prettier"],
    rules: {
        "no-unused-vars": "off",
        "no-console": "warn",

        "react/display-name": "off",
        "react/jsx-curly-brace-presence": [
            "warn",
            { props: "never", children: "never" },
        ],

        //#region  //*=========== Unused Import ===========
        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
        //#endregion  //*======== Unused Import ===========
    },
    globals: {
        React: true,
        JSX: true,
    },
};
