export function chainWebpack(config) {
  config.module
    .rule('vue')
    .use('vue-loader')
    .tap(options => {
      options.compilerOptions = {
        // your compiler options here
      };
      return options;
    });
}