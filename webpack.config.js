const path = require('path');

module.exports = {
	entry: './src/app.js',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public', 'dist'),
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true,
		port: 3000,
		publicPath: '/dist/',
		hot: true,
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
