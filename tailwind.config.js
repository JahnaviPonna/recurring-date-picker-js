// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         ticktick: {
//           bg: '#F5F7FA',
//           primary: '#4C83FF',
//           light: '#EAF1FF',
//         },
//       },
//       fontFamily: {
//         sans: ['Inter', 'ui-sans-serif', 'system-ui'],
//       },
//       borderRadius: {
//         xl: '1rem',
//       },
//     },
//   },
//   plugins: [],
// }


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        soft: {
          bg: '#F9FAFB',             // very pale background
          card: '#FFFFFF',           // pure white card
          border: '#E5E7EB',         // light gray borders
          primary: '#A5B4FC',        // soft indigo
          primaryDark: '#818CF8',    // darker for hover
          accent: '#E0E7FF',         // pastel indigo background
          text: '#1F2937',           // neutral dark text
          muted: '#6B7280',          // gray-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
}
