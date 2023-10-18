/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "7xl": [
        "80px",
        {
          lineHeight: "103px",
          letterSpacing: "0em",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "40px",
        {
          lineHeight: "52px",
          letterSpacing: "-1.5px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "28px",
        {
          lineHeight: "40px",
          letterSpacing: "1px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "12px",
        {
          lineHeight: "25px",
          letterSpacing: "2.6px",
          fontWeight: "700",
        },
      ],
      xl: [
        "11px",
        {
          lineHeight: "25px",
          letterSpacing: "1px",
          fontWeight: "700",
        },
      ],
      base: [
        "14px",
        {
          lineHeight: "25px",
        },
      ],
    },
    extend: {
      screens: {
        sm: "375px",
        md: "960px",
        lg: "1340px",
      },
      colors: {
        p_dark: "hsl(240, 67%, 8%)",
        p_dgray: "hsl(240, 17%, 26%)",
        p_lgray: "hsl(240, 6%, 54%)",
        p_cyan: "hsl(194, 48%, 49%)",
        p_lorange: "hsl(33, 82%, 61%)",
        p_purple: "hsl(253, 67%, 51%)",
        p_dorange: "hsl(10, 63%, 51%)",
        p_red: "hsl(2, 68%, 53%)",
        p_brown: "hsl(17, 73%, 46%)",
        p_green: "hsl(169, 73%, 44%)",
        p_blue: "hsl(222, 87%, 56%)",
      },
    },
  },
  plugins: [],
};
