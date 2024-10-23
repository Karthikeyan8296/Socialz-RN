/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter_thin: ['Inter_18pt-Thin', 'sans-serif'],
        Inter_extraLight: ['Inter_18pt-ExtraLight', 'sans-serif'],
        Inter_light: ['Inter_18pt-Light', 'sans-serif'],
        Inter_regular: ['Inter_18pt-Regular', 'sans-serif'],
        Inter_medium: ['Inter_18pt-Medium', 'sans-serif'],
        Inter_semiBold: ['Inter_18pt-SemiBold', 'sans-serif'],
        Inter_bold: ['Inter_18pt-Bold', 'sans-serif'],
        Inter_extraBold: ['Inter_18pt-ExtraBold', 'sans-serif'],
        Inter_black: ['Inter_18pt-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
