const gulp = require('gulp');
const webpack = require('webpack');
const path = require('path');
const assign = require('lodash').assign;
const nodeExternals = require('webpack-node-externals');
const WebpackDevServer = require('webpack-dev-server');
const frontWebpackConfig = require('./config/webpack.prod.config.js');

// load dev environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

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
const baseBackEndConfig = config({
  output: {
    path: path.join(__dirname, 'dist'),
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
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
});

const apiConfig = config(assign({},
  baseBackEndConfig,
  {
    entry: './server/create-api-server.js',
    output: assign(
      {
        filename: 'api.bundle.js',
        library: 'api',
      },
      baseBackEndConfig.output
    ),
  }
));

const appConfig = config(assign({},
  baseBackEndConfig,
  {
    entry: './server/create-app-server.js',
    output: assign(
      {
        filename: 'app.bundle.js',
        library: 'app',
      }, 
      baseBackEndConfig.output
    ),
  }
));

// production gulp tasks
gulp.task('frontend-build', done => {
  webpack(frontEndConfig).run(onBuildComplete(done));
});

gulp.task('backend-build-api', done => {
  webpack(apiConfig).run(onBuildComplete(done));
});

gulp.task('backend-build-server', done => {
  webpack(appConfig).run(onBuildComplete(done));
});

gulp.task('build', ['backend-build-api', 'backend-build-server', 'frontend-build'], done => {
  boot();
});

// development gulp tasks
const frontEndDevConfig = require('./config/webpack.dev.config.js');

gulp.task('frontend-dev-assets', done => {
  webpack(frontEndDevConfig).run(onBuildComplete(done));
})

gulp.task('frontend-dev', [
  'frontend-dev-assets', 
  'backend-build-api',
  'backend-build-server'
], done => {
  const compiler = webpack(frontEndDevConfig);
  const server = new WebpackDevServer(compiler, {
    publicPath: frontEndDevConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
  }).listen(8080, 'localhost', function (err, result) {
      if (err) return console.log(err);
      console.log('WDS listening on http://localhost:8080');

      //start api and express app
      boot();
  });
});

gulp.task('dev', [
  'frontend-dev-assets', 
  'backend-build-api', 
  'backend-build-server', 
  'frontend-dev'
]);

// docker gulp tasks
gulp.task('docker-api', ['backend-build-api'], done => {
  (require('./dist/api.bundle.js').default)(process.env.PORT-1);
});

gulp.task('docker-server', ['backend-build-server'], done => {
  (require('./dist/app.bundle.js').default)(process.env.PORT);
});

function boot() {
  // launch app and api servers
  const createApiServer = require('./dist/api.bundle.js').default;
  const createAppServer = require('./dist/app.bundle.js').default;

  createApiServer(process.env.PORT-1);
  createAppServer(process.env.PORT);
}

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