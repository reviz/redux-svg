const path = require('path');

module.exports = {
    devtool: 'eval',
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, '/public/'),
      publicPath: '/public/',
      hot: true,
      inline: true,
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },
    resolve: {
        alias: {
            'redux-svg': path.join(__dirname, '..', 'lib'),
        },
    },
};
