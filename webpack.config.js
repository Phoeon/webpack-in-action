var webpack = require("webpack");
module.exports = {
	entry : [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./app/index.js'
	],
	output : {
		path : __dirname+"/app/dist/js/",
		filename : 'bundle.js',
		publicPath : '/app/src/js/'
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin()
	]	,
	resolve : {
		extensions : ["",".css",".js"]
	},
	module : {
		loaders : [
			{test : /\.css$/, loader : 'style!css'},
			{test:/\.jsx?$/ , loaders : ['react-hot','babel'],exclude : /node_modules/}
		]
	}
}
