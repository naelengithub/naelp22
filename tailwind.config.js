/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      blossom: "#FFB6C1",
      "floral-white": "#eee",
      charcoal: "#333333",
      "slate-grey": "#64738F",
      "bonito-brown": "#B98F85",
    },
  },
  plugins: [],
};
