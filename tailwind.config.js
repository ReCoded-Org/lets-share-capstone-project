const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans],
            },
        },
        colors: {
            primary: "#33956D",
            secondary: "#F07167",
            fontColor: "#3C4347",
            btnBgHover: "#dce6ef",
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
