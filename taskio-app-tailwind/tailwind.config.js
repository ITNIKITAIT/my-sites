/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        screens: {
            lg: {
                max: '1999px',
            },
            md: {
                max: '1200px',
            },
            sm: {
                max: '768px',
            },
            xs: {
                max: '480px',
            },
        },
        extend: {
            fontFamily: {
                outfit: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            backgroundColor: {
                lightblue: '#009DFC',
            },
            colors: {
                blueviolet: '#0A0A4A',
                lightgray: '#2F2F2F',
            },
        },
    },
    plugins: [],
};
