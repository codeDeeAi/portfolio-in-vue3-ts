/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'jigsaw': "url('/svg/jigsaw.svg')",
            },
            colors: {
                stylish: {
                    dark: '#5D5C61',
                    brown: '#379683',
                    bluedeep: '#557A95',
                    blue: '#7395AE',
                    chocolate: '#B1A296'
                }
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
};