const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  configureWebpack: {
    externals: {
      AMap: "AMap"
    },
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ["/", "/about", "/login", "/register"],
      })
    ]
  }
}
