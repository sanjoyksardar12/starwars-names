const join = require("path").join
const include = join(__dirname, "src");

const config = {
  entry: "./src/index",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "starWarsNames",
  },
  devtool: "source-map",
  mode: "production",
  module: {
    rules:[
      {
       test: /\.js$/, 
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
              plugins: [['@babel/plugin-proposal-class-properties']]
            }
          }
        ]
      },
      // {
      //   test: /\.json$/, 
      //    use: [
      //      {
      //        loader: "json-loader",
      //      }
      //    ]
      //  },
    ]
  }
};

module.exports = config