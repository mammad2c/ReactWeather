var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js', 'script-loader!foundation-sites/dist/js/foundation.min.js', './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery'})],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: __dirname + '/app/components/Main.jsx',
      Nav: __dirname + '/app/components/Nav.jsx',
      Weather: __dirname + '/app/components/Weather.jsx',
      WeatherForm: __dirname + '/app/components/WeatherForm.jsx',
      WeatherMessage: __dirname + '/app/components/WeatherMessage.jsx',
      About: __dirname + '/app/components/About.jsx',
      Examples: __dirname + '/app/components/Examples.jsx',
      openWeatherMap: __dirname + '/app/api/openWeatherMap.jsx',
      ErrorModal: __dirname + '/app/components/ErrorModal.jsx'
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'eval-source-map'
};
