module.exports = {
    entry: {
        'src/app/index': './src/app/index'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            loader: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}