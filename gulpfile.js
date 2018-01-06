const gulp = require('gulp');
const webpack = require('webpack');
const path = require('path');
const assign = require('lodash').assign;
const nodeExternals = require('webpack-node-externals');
const WebpackDevServer = require('webpack-dev-server');
const frontWebpackConfig = require('./config/webpack.prod.config.js')

// load dev environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
};

const config = (overrides) => assign({}, baseConfig, overrides || {});

const frontEndConfig = config(frontWebpackConfig({
  port: process.env.PORT,
}));
const backendConfig = config({
  entry: './server/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.bundle.js',
    library: 'backend',
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
    })
  ],
});

// production gulp tasks
gulp.task('frontend-build', done => {
  webpack(frontEndConfig).run(onBuildComplete(done));
});

gulp.task('backend-build', done => {
  webpack(backendConfig).run(onBuildComplete(done));
});

gulp.task('build', ['backend-build', 'frontend-build'], done => {
  // launch app and api servers
  const {
    createApiServer,
    createAppServer,
  } = require('./dist/server.bundle.js');

  createApiServer(process.env.PORT-1);
  createAppServer(process.env.PORT);
});

// development gulp tasks
const frontEndDevConfig = require('./config/webpack.dev.config.js')({
  port: process.env.PORT
});

gulp.task('frontend-dev-assets', done => {
  webpack(frontEndDevConfig).run(onBuildComplete(done));
})

gulp.task('frontend-dev', ['frontend-dev-assets', 'backend-build'], done => {
  const compiler = webpack(frontEndDevConfig);
  const server = new WebpackDevServer(compiler, {
    publicPath: frontEndDevConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
  }).listen(8080, 'localhost', function (err, result) {
      if (err) return console.log(err);
      console.log('WDS listening on http://localhost:8080');

      // start express api + app servers
      const {
        createApiServer,
        createAppServer,
      } = require('./dist/server.bundle.js');

      createApiServer(process.env.PORT-1);
      createAppServer(process.env.PORT);
  });
});

gulp.task('dev', ['frontend-dev-assets', 'backend-build', 'frontend-dev']);

function onBuildComplete (done) {
  return function handleComplete (err, stats) {
    if (err) {
      console.log('Error building', err);
      throw err;
    } else {
      console.log(stats.toString());
    }

    if (done) done();
  }
}
