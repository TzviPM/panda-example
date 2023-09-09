module.exports = {
  plugins: [
    require('@pandacss/dev/postcss')({
      configPath: 'libs/ui/panda.config.ts',
      cwd: 'libs/ui',
    }),
  ],
};
