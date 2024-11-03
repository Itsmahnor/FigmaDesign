/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JavaScript/JSX files in src for Tailwind classes
    "./public/index.html"
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-sm': '540px',   // @media (min-width: 576px)
        'screen-md': '720px',   // @media (min-width: 768px)
        'screen-lg': '960px',   // @media (min-width: 992px)
        'screen-xl': '1140px',  // @media (min-width: 1200px)
      },
    },
  },
  plugins: [],
}

