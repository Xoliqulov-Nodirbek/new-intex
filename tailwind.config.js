/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          black_dark: '#24283A',
          black_thin: '#464A4D',
        },
        blue: {
          accent: '#109EF4',
          base: '#2B3D90',
          recommend: '#22B0F8',
        },
        gray: {
          bg_nav: '#FAFAFA',
          bg_main: '#F7F9FA',
          text: '#7A7E80',
          placeholder: '#B4B6B8',
          foot: '#464A4D',
        },
        red: {
          xit: '#FF3A3A',
          sale: '#FF5C5C',
        },
        green: {
          new: '#0BCC23',
        },
        yellow: {
          popular: '#FAB529',
        },
      },
      width: {
        cardWidth: '280px',
        resCardWidth: '220px',
        orderBtn: '248px',
        resOrderBtn: '196px',
        '410': '410px',
        '426': '426px',
        '219': '219px',
      },
      maxWidth: {
        container: '1220px',
        '281': '281px',
        '237': '237px',
        '290': '290px',
      },
      maxHeight: {
        '153': '154px',
        '430': '430px',
      },
      height: {
        cardHeight: '220px',
        resCardHeight: '347px',
        orderBtn: '48px',
        '500': '500px',
        '420': '420px',
        '430': '430px',
        '520': '520px',
        '577': '577px',
        '237': '237px',
        '93': '93px',
      },
      boxShadow: {
        order_btn:
          '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        labelRadius: '0px 8px 8px 0px',
        btn_radius: '12px',
      },
    },
  },
  plugins: [],
}
