/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.{html,js}", "./src/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      taupe: "var(--taupe)",
      white: "var(--white)",
      black: "var(--black)",
      ivory: "var(--ivory)",
      cream: "var(--cream)",
      yellow: "var(--yellow)",
      "dutch-white": "var(--dutch-white)",
      khaki: "var(--khaki)",
    },

    // Use variables for this

    fontSize: {
      xs: "var(--text-xs)",
      sm: "var(--text-sm)",
      base: "var(--text-base)",
      lg: "var(--text-lg)",
      xl: "var(--text-xl)",
      "2xl": "var(--text-2xl)",
      "3xl": "var(--text-3xl)",
      "4xl": "var(--text-4xl)",
      "5xl": "var(--text-5xl)",
      "6xl": "var(--text-6xl)",
    },

    extend: {
      fontFamily: {
        sig: "var(--signifier)",
        "sig-light": "var(--signifier-light)",
        gro: "var(--gro-regular)",
        "gro-italic": "var(--gro-italic)",
        "gro-bold": "var(--gro-bold)",
      },
    },
  },
  plugins: [],
};
