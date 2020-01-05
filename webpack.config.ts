const TerserPlugin = require('terser-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = {
	entry: [
		'./src/index.tsx'
	],
	//mode: 'production',
	mode: "development",
	output: {
		path: __dirname + "/dist",
		filename: 'build.js',
		publicPath: __dirname + '/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	  },
	devServer: {
		historyApiFallback: true,
   		hot: false
	},
	optimization: {
		minimize: true,
		minimizer: [
		  new TerserPlugin({
			cache: true,
		  }),
		],
	},
	module: {
		rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
			},
			{
				test: /\.(png|jpg|gif|svg|ico)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {},
				  },
				],
			},
			{
				test: /(\.ts|\.tsx)$/, 
				loaders: ["ts-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  'style-loader',
				  'css-loader',
				  'sass-loader',
				],
			  },
		]
	},
};