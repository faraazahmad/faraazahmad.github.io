module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // honeydew: '#F1FAEE',
        // prussian: '#1D3557',
        // celadon: '#457B9D',
        // powder: '#A8DADC',
        // imperial: '#E63946',
        terracotta: '#E07A5F',
        eggshell: '#f4f1de',
        independence: '#3D405B',
        champagne: {
          200: '#F5DBB0',
          500: '#F2CC8F',
          800: '#D9B780',
        },
        greensheen: {
          100: '#A6C9B8',
          500: '#81B29A',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
