/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    safelist: [
        "bg-indigo-400",
        "bg-indigo-500",
        "bg-yellow-400",
        "bg-yellow-500",
        "rounded-md",
        "rounded-full"
    ],
    theme: {
        extend: {}
    },
    plugins: []
};
