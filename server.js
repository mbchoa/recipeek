const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config/webpack.dev.config');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
        "/api/*": "http://localhost:3000", // <-- Proxy /api/search/:ingredient to http://localhost:3000/api/search/:ingredient
    }
}).listen(8080, 'localhost', function (err, result) {
    if (err) return console.log(err);
    console.log('WDS listening on http://localhost:8080');

    // start express api server
    const app = require('./server/apiServer.js');
});
