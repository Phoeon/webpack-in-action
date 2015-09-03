// import webpack from 'webpack';
// import wpDevServer from 'webpack-dev-server';
// import wpCfg from './webpack.config.js';
var webpack = require('webpack'),
	wpDevServer = require('webpack-dev-server'),
	wpCfg = require('../webpack.config.js');
new wpDevServer(webpack(wpCfg),{
	hot : true,
	// publicPath: wpCfg.output.publicPath,
	historyApiFallback : true,
	noInfo : false
}).listen('8080','localhost',function(err){
	if(err)console.log(err);
	else console.log("listening localhost at port 8080...");
})