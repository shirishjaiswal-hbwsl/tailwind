/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'mobile': {'max': '600px'},
      // => @media (min-width: 576px) { ... }

      's': {'min':'600px', 'max':'768px'},
      // => @media (min-width: 960px) { ... }

      'm': {'min':'768px', 'max':'992px'},
      // => @media (min-width: 1440px) { ... }

      'l': {'min':'992px', 'max':'1200px'},

      'xl': {'min':'1200px', 'max':'1400px'},

      'xxl': {'min' : '1400px'},
    },
    extend: {
      colors : {
        'pallate-white': 'var(--pallate-white)',
        'pallate-grey-800' : 'var(--pallate-gray-800);',
        'pallate-blue-700' : 'var(--pallate-blue-700)',
        'pallate-gray-300' : 'var(--pallate-gray-300)',
        'pallate-gray-100' : 'var(--pallate-gray-100)',
        'pallate-gray-700' : 'var(--pallate-gray-700)',
        'pallate-blue-300' : 'var(--pallate-blue-300)',
        'pallate-blue-700' : 'var(--pallate-blue-700)',
        'pallate-gray-500' : 'var(--pallate-gray-500)',
        'pallate-blue-850' : 'var(--pallate-blue-850)'
      }
    },
  },
  plugins: [],
}

