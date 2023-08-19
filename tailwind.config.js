/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        goldenrod: "#f7c85a",
        gray: {
          "100": "#2b2b31",
          "200": "rgba(0, 0, 0, 0.19)",
        },
        mediumseagreen: "#19ab6f",
        darkslategray: {
          "100": "#0d4a31",
          "200": "#093624",
          "300": "#083120",
        },
        midnightblue: "#272d95",
        "gray-gray-8": "#595959",
        black: "#000",
        "gray-2": "#4f4f4f",
        lightgray: "#becec7",
        cornflowerblue: "#adb2ff",
        "daybreak-blue-blue-6": "#1890ff",
        "gray-gray-1": "#fff",
      },
      fontFamily: {
        "regular-16px-24": "Roboto",
        "playfair-display": "'Playfair Display'",
      },
      borderRadius: {
        "10xs": "3px",
        "8xs": "5px",
        mini: "15px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
