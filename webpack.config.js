const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
cache: false,
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js',
 },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.zwell.io',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      }
    },
    port: 3000,
    historyApiFallback: true
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       resolve: {
         fullySpecified: false,
         extensions: ['.js', '.jsx']
       },
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
     {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
      loader: "url-loader",
      options: { limit: false },
    },
   ]
 },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.png'
  })],
}