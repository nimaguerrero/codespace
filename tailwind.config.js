module.exports = {
  content: [
    './client/app/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  important: true,
  // Active dark mode on class basis
  darkMode: 'class',
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('https://www.svgrepo.com/show/96431/check-mark-in-a-circle.svg')",
        // landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
  future: {
    purgeLayersByDefault: true,
  },
};
