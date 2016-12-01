const gulp = require('gulp');
const webpack = require('webpack');
const path = require('path');
const assign = require('lodash').assign;
const nodeExternals = require('webpack-node-externals');
const nodemon = require('nodemon');

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
      mangle: true,
      comments: false,
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
});

// gulp tasks

const onBuildComplete = done => (err, stats) => {
  if (err) {
    console.log('Error building', err);
  } else {
    console.log(stats.toString());
  }

  if (done) done();
};

gulp.task('frontend-build', done => {
  webpack(frontEndConfig).run(onBuildComplete(done));
});

gulp.task('backend-build', done => {
  webpack(backEndConfig).run(onBuildComplete(done));
});

gulp.task('build', ['frontend-build', 'backend-build']);

gulp.task('backend-watch', function(done) {
  var firedDone = false;
  webpack(backEndConfig).watch(100, function(err, stats) {
    if(!firedDone) {
      firedDone = true;
      done();
    }

    nodemon.restart();
  });
});
