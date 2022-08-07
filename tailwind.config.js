/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'jigsaw': "url('/svg/jigsaw.svg')",
                'head': "url('/images/1-rb.png')",
            },
            colors: {}
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
};