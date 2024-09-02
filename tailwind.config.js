/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

const { addDynamicIconSelectors } = require('@iconify/tailwind')

export default {
  darkMode: ['selector', '[class="dark"]'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sora Variable"', ...defaultTheme.fontFamily.sans],
        heading: ['"Bricolage Grotesque Variable"'],
      },
    },
  },
  plugins: [
    require('tailwindcss-primeui'),
    addDynamicIconSelectors(),
  ],
}
