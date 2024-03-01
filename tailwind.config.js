function generateFractions(limit = 12) {
  const fractions = {};
  for (let i = 1; i <= limit; i++) {
    fractions[`${i}/${limit}`] = `${(i / limit) * 100}%`;
  }
  return fractions;
}

function generateSpacing(start = 100, end = 200, step = 4) {
  const spacing = {};
  for (let i = start; i <= end; i += step) {
    spacing[i] = `${i / 4}rem`; // 1rem == 4를 기반으로
  }
  return spacing;
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        ...generateSpacing()
      },
      height : {
        ...generateFractions()
      },
      width : {
        ...generateFractions()
      },
      colors : {
        'def': '#17181A',
        'sub' : '#838383',
      }
    },
  },
  plugins: [],
};