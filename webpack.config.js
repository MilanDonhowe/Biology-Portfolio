const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "production",
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /.s[ac]ss$/i, use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]}
        ]
    }
};