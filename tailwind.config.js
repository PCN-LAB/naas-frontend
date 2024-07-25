/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "variable-collection-color": "var(--variable-collection-color)",
        "variable-collection-color-2": "var(--variable-collection-color-2)",
        "variable-collection-color-3": "var(--variable-collection-color-3)",
        "variable-collection-light-blue": "var(--variable-collection-light-blue)",
        'custom-blue': 'rgba(0, 27, 72, 1)',
        'custom-gray': 'rgba(251, 251, 251, 1)',
        colorMapHeaderBG: '#dde8f0',
        colorSearchButton: '#028abd',
        colorVerticalNav: '#97cbdc',
        colorInputChatbot: '#004581',
      },
      height: {
        '800': '800px',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Ubuntu': ['Ubuntu', 'sans-serif']
      },
      spacing: {
        '40': '40rem',
      },
      backgroundImage: {
        'chat-bot-gradient': 'linear-gradient(to bottom, #018abd, #001b48)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#888 #e0e0e0',
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          'height': '12px', /* Increase the height to simulate margin */
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          'background': '#e0e0e0',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          'background-color': '#888',
          'border-radius': '10px',
          'border': '3px solid #e0e0e0', /* This creates a margin effect */
        },

        '.chat-scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#888 #e0e0e0',
        },
        '.chat-scrollbar::-webkit-scrollbar': {
          'height': '12px', /* Increase the height to simulate margin */
        },
        '.chat-scrollbar::-webkit-scrollbar-thumb': {
          'background-color': '#e0e0e0',
          'border-radius': '10px',
          'border': '3px solid #004581', /* This creates a margin effect */
        },
      });
    },
  ],
};
