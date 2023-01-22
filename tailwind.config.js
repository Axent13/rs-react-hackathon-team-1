/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    safelist: [
        "bg-indigo-400",
        "bg-indigo-500",
        "bg-yellow-400",
        "bg-yellow-500",
        "bg-green-600",
        "bg-teal-500",
        "bg-orange-600",
        "rounded-md",
        "rounded-full"
    ],
    theme: {
        extend: {
            backgroundImage: {
                main: "url('app/background.png')"
            },
            fontFamily: {
                main: ["Sofia Sans Extra Condensed"],
                header: ["rajdhani"]
            }
        }
    },
    plugins: []
};
