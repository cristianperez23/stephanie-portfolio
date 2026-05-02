/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Helvetica Neue', 'Avenir Next', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Didot', 'Bodoni 72', 'serif'],
        script: ['var(--font-allura)', 'Allura', 'Snell Roundhand', 'Apple Chancery', 'cursive'],
        label: ['var(--font-montserrat)', 'Montserrat', 'Futura', 'sans-serif'],
      },
      colors: {
        'ivory-cream': '#fffaf5',
        'warm-ivory': '#f8f4ef',
        'dusty-blush': '#e8cfc7',
        'muted-rose': '#cfa6a1',
        'soft-taupe': '#c7b9af',
        'espresso': '#3e2f2b',
        'antique-gold': '#c6a45c',
        'powder-pink': '#f5e6e8',
        'champagne': '#f0e6d2',
        'sage-mist': '#e8ede8',
        'pearl': '#f8f6f4',
        'charcoal-soft': '#6d5e58',
      },
    },
  },
  plugins: [],
}
