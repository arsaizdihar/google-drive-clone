module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        google: '"Product Sans", Arial, sans-serif',
        roboto: 'Roboto, RobotoDraft, Helvetica, Arial, sans-serif',
      },
      colors: {
        gray: {
          300: '#F1F3F4',
          600: '#5f6368',
        },
        'blue-text': '#185abc',
      },
      boxShadow: {
        surround:
          '0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
        'surround-lg':
          '0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)',
      },
      width: {
        sidebar: '256px',
      },
    },
  },
  plugins: [],
}
