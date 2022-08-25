const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Poppins", "Almarai", ...fontFamily.sans],
                head: ["Bebas Neue", "Almarai", ...fontFamily.sans],
                qoute: ["Caveat", "Aref Ruqaa", ...fontFamily.sans],
            },
        },
        colors: {
            primary: "#33956D",
            secondary: "#F07167",
            fontColor: "#3C4347",
            btnBgHover: "#dce6ef",
            userInfoBg: "#f5f5f5",
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
