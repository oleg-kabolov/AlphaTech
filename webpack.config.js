const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  mode: "development", // Укажите production для финальной сборки
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    hot: true,
    open: true,
    watchFiles: ["./src/**/*"],
  },
  module: {
    rules: [
      // Обработка SCSS и CSS
      {
        test: [/\.scss$/, /\.css$/],
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer(), cssnano()],
              },
            },
          },
          "sass-loader",
        ],
      },
      // Обработка HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }, // Минимизация обычно используется для production
          },
        ],
      },
      // Обработка JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      // Обработка изображений и шрифтов через встроенный asset/resource
      {
        test: /\.(png|svg|jpg|jpeg|webp|gif|woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource", // Это встроенная поддержка для работы с файлами
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Очищает dist перед каждой сборкой
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new SVGSpritemapPlugin("src/images/icons/*.svg", {
      output: {
        svgo: {
          plugins: [{ name: "convertColors", params: { currentColor: true } }],
        },
        filename: "./src/images/icons/sprite.svg",
      },
    }),
    ,
  ],
};
