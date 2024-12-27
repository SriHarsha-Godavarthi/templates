const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode: 'development',
entry: './src/index.js',
devtool: 'inline-source-map',
output: {
path: path.join(__dirname, '../../dist'),
filename: 'bundle.js'
},
devtool: 'inline-source-map',
devServer: {
static: '../../../dist',
},
module: {
rules: [
{
test: /\.jsx?$/,
exclude: /node_modules/,
use:{
loader: 'babel-loader',
options:{
  presets: ["@babel/preset-react"],
  plugins: ["@babel/plugin-transform-react-jsx"],

}
}
},
{
  test: /\.tsx?$/,
exclude: /node_modules/,
use:{
loader: 'babel-loader',
options:{
  presets: ["@babel/preset-typescript"],
  plugins: ["@babel/plugin-transform-typescript"],

}
}
},
{
    test: /\.css$/i,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"],
  }, {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
        },
      },
    ],
  },
]
},
resolve: {
extensions: ['.jsx', '.ts', '.js','.css'],
},
plugins:[
new HtmlWebpackPlugin({
template: './public/index.html'
})
]
}