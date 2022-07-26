module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue_cli_online_shop/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      },
    },
  }
};