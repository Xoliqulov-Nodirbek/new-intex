/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        5.5: "5.5px",
        13: "13px",
      },
      colors: {
        black: {
          black_dark: "#24283A",
          black_thin: "#464A4D",
          black_light: "#A0A0A0"
        },

        blue: {
          accent: "#109EF4",
          base: "#2B3D90",
          recommend: "#22B0F8",
        },
        gray: {
          bg_nav: "#FAFAFA",
          bg_main: "#F7F9FA",
          text: "#7A7E80",
          placeholder: "#B4B6B8",
        },
        red: {
          xit: "#FF3A3A",
          sale: "#FF5C5C",
        },
        green: {
          new: "#0BCC23",
        },
        yellow: {
          popular: "#FAB529",
        },
      },

      backgroundColor: {
        azure: "#F2F2F2",
        blueActive: "#109EF4",
      },

      fontSize: {
        32: "32px",
      },

      lineHeight: {
        36: "36px",
        22: '22px'
      },

      fontFamily: {
        inter: "Inter",
      },

      width: {
        respo: "100%",
        cardWidth: "280px",
        resCardWidth: "220px",
        orderBtn: "248px",
        resOrderBtn: "196px",
        410: "410px",
        426: "426px",
        219: "219px",
        111: '111px'
      },
      maxWidth: {
        container: "1220px",
        248: '225px'
      },
      height: {
        cardHeight: "220px",
        resCardHeight: "347px",
        orderBtn: "48px",
        500: "500px",
        420: "420px",
        430: "430px",
        520: "520px",
        577: "577px",
      },
      boxShadow: {
        order_btn:
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
          card: '2px 12px 24px rgba(60, 60, 60, 0.1)'
      },
      borderRadius: {
        labelRadius: "0px 8px 8px 0px",
        btn_radius: "12px",
      },
    },
  },
  plugins: [],
};
