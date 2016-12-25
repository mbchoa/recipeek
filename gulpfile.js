const gulp = require('gulp');
const webpack = require('webpack');
const path = require('path');
const assign = require('lodash').assign;
const nodeExternals = require('webpack-node-externals');
const WebpackDevServer = require('webpack-dev-server');

const frontWebpackConfig = require('./config/webpack.prod.config.js');

const baseConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
};

const config = (overrides) => assign({}, baseConfig, overrides || {});

const frontEndConfig = config(frontWebpackConfig);
const backEndConfig = config({
  entry: './server/apiServer.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'apiServer.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
        output: {
            comments: false
        },
        sourceMap: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
});

const onBuildComplete = done => (err, stats) => {
  if (err) {
    console.log('Error building', err);
    throw err;
  } else {
    console.log(stats.toString());
  }

  if (done) done();
};

// production gulp tasks
gulp.task('frontend-build', done => {
  webpack(frontEndConfig).run(onBuildComplete(done));
});

gulp.task('backend-build', done => {
  webpack(backEndConfig).run(onBuildComplete(done));
});

gulp.task('build', ['backend-build', 'frontend-build']);

// development gulp tasks
const frontEndDevConfig = require('./config/webpack.dev.config.js');

gulp.task('frontend-dev-assets', done => {
  webpack(frontEndDevConfig).run(onBuildComplete(done));
})

gulp.task('frontend-dev', ['frontend-dev-assets', 'backend-build'], done => {
  const compiler = webpack(frontEndDevConfig);
  const server = new WebpackDevServer(compiler, {
    publicPath: frontEndDevConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
        "/api/*": "http://localhost:4000", // <-- Proxy /api/search/:ingredient to http://localhost:3000/api/search/:ingredient
    }
  }).listen(8080, 'localhost', function (err, result) {
      if (err) return console.log(err);
      console.log('WDS listening on http://localhost:8080');

      // start express web + api server
      require('./dist/apiServer.js');
  });
});

gulp.task('dev', ['frontend-dev-assets', 'backend-build', 'frontend-dev']);
