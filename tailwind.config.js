/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" },
      },
      colors: {
        // Primary Colors
        navy: '#1a2332',
        cream: '#f8f6f2',
        gold: '#d4af37',
        charcoal: '#2c2c2c',
        // Secondary Colors
        'warm-grey': '#6b6b6b',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        'classic': '2px',
      },
    },
  },
  plugins: [],
}