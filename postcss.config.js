module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: 'last 2 versions',
    }),
    require('postcss-px2rem')({
      remUnit: 75,
    }),
    require('postcss-normalize'),
  ],
};
