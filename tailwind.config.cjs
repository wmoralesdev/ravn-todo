/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                neutral: {
                    100: '#ffffff',
                    200: '#94979a',
                    300: '#393d41',
                    400: '#2c2f33',
                    500: '#222528',
                },
                primary: {
                    100: '#f4ccc8',
                    200: '#eba59e',
                    300: '#e27d73',
                    400: '#da584b',
                },
                secondary: {
                    100: '#c8e1bc',
                    200: '#aad199',
                    300: '#8dc275',
                    400: '#70b252',
                },
                tertiary: {
                    100: '#f9eed7',
                    200: '#f2daab',
                    300: '#ebc77f',
                    400: '#e5b454',
                },
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-5deg)' },
                    '50%': { transform: 'rotate(5deg)' },
                },
                stutteredSpin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(270deg)' },
                    '55%': { borderRadius: '100%', backgroundColor: '#da584b' },
                    '100%': { transform: 'rotate(360deg)', borderRadius: '0%' },
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                'stuttered-spin': 'stutteredSpin 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
