/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.{html,js}", "./stories/*.{html,js}"],
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

    fontSize: {
      xs: ".688rem",
      sm: ".8125rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.875rem",
      "3xl": "2.125rem",
      "4xl": "2.625rem",
      "5xl": "5rem",
      "6xl": "9.375rem",
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
