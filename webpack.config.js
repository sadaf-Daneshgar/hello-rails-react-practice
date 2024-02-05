const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    application: "./app/javascript/packs/application.js"
  },
  
    resolve: {
      fallback: {
        fs: false
      }
    },
  
  module: {
    rules: [
      {
        test:  /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // ... other rules
    ]
  },
  output: {
    filename: "[name]-[contenthash].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "public/packs"),
    publicPath: "/packs/",
  },
  
  // Remove the 'node' configuration block entirely
  // No longer add polyfills or mocks for Node.js stuff automatically
};
