/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans : ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
            },
        },
    },
    plugins: [],
}
