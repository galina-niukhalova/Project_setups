const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build',
    },

    mode: 'development', //'production'

    devServer: {
        host: '0.0.0.0',
        port: 5000,
        contentBase: 'public',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                },
            },
        ]
    }
};