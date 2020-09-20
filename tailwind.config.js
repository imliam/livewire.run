module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './src/**/*.css',
      './src/**/*.js',
      './public/*.html',
    ],
  },
  theme: {
    extend: {
      colors: {
        livewire: {
          50: '#F6F7FB',
          100: '#EDEEF6',
          200: '#D3D5E9',
          300: '#B9BBDB',
          400: '#8489C1',
          500: '#4F56A6',
          600: '#474D95',
          700: '#2F3464',
          800: '#24274B',
          900: '#181A32',
        },
        blurple: {
          50: '#F8F9FD',
          100: '#F1F3FB',
          200: '#DCE2F6',
          300: '#C7D0F0',
          400: '#9DADE5',
          500: '#738ADA',
          600: '#687CC4',
          700: '#455383',
          800: '#343E62',
          900: '#232941',
        },
      }
    },
  },
  variants: {},
  plugins: [],
}
