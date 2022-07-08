/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  "./src/about"
  ],
  theme: {
    extend: {},
  },
  plugins: [

      require( "daisyui",
        '@tailwindcss/forms',
        '@tailwindcss/aspect-ratio'),

  ],
  variants: {
    width: ["responsive", "hover", "focus"]
}
}
