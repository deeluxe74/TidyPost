module.exports = {
    devServer: {
      hot: false,
      liveReload: false,
    },
    configureWebpack: {
      devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' }
      }
    }
}