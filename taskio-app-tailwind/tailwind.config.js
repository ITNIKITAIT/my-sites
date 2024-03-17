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
                outfit: ['Outfit', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            backgroundColor: {
                lightblue: '#009DFC',
                hoverbtn: 'rgb(234 234 234)',
                lightgray: '#F9F9F9',
                darkblue: '#102437',
            },
            colors: {
                blueviolet: '#0A0A4A',
                gray: '#909090',
                lightblue: '#009DFC',
            },
            borderColor: {
                e7: '#E7E7E7',
            },
        },
    },
    plugins: [],
};
