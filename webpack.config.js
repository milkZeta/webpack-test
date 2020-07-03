const htmlWebpackPlugin=require('html-webpack-plugin');
const vueLoaderPlugin=require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//生成文件之前清空
module.exports={
	entry:{
		'app':'./src/app.js',
		'main':'./src/main.js',
		'a':'./src/script/a.js',
	    'b':'./src/script/b.js',
	    'c':'./src/script/c.js'},
	output:{
		 path:__dirname+'/dist',
		filename:'js/[name]-bundle.js'
	},
	module:{
		rules: [
		{
	      test: /\.html$/,
	      use: {
	        loader: 'html-loader'
	      }
	    },
	    {
	      test: /\.tpl$/,
	      use: {
	        loader: 'ejs-loader'
	      }
	    },
	    {
	      test: /\.(js|.jsx)$/,
	      use: {
	        loader: 'babel-loader'
	      },
	      exclude: require("path").resolve(__dirname,"node_modules")
	    },
	    {
	    	test:/\.css$/,
	    	use:[
	    	{
	    	loader:'style-loader'	    	
	    	},
	    	{
	    		loader:'css-loader',
	    		options:{
	    			importLoaders: 1
	    		}
	    	},
	    	{
	    		loader:'postcss-loader',
	    		options: { 
	    		    plugins: [ require("autoprefixer")({ overrideBrowserslist: ['last 5 versions'] }) ] 
	    		    
	    		}
	    	}]
	    },
	    {
	    	test:/\.less$/,
	    	use:[
	    	{
	    	loader:'style-loader'	    	
	    	},
	    	{
	    		loader:'css-loader',
	    		options:{
	    		   importLoaders: 1	    			
	    		}
	    	},
	    	{
	    		loader:'postcss-loader',
	    		options: { 
	    		    plugins: [ require("autoprefixer")({ overrideBrowserslist: ['last 5 versions'] }) ] 	    		    
	    		}
	    	},
	    	{
	    		loader:'less-loader'
	    	}]
	    },
	     {
	    	test:/\.(sass|scss)$/,
	    	use:[
	    	{
	    	loader:'style-loader'	    	
	    	},
	    	{
	    		loader:'css-loader',
	    		options:{
	    		   importLoaders: 1	    			
	    		}
	    	},
	    	{
	    		loader:'postcss-loader',
	    		options: { 
	    		    plugins: [ require("autoprefixer")({ overrideBrowserslist: ['last 5 versions'] }) ] 	    		    
	    		}
	    	},
	    	{
	    		loader:'sass-loader'
	    	}]
	    },
	    {
	    	test:/\.(jpg|png|gif|svg)$/i,
	    	loader:'url-loader',
	    	options:{
	    		limit:200000,
	    		esModule:false,
	    		name:'assets/[name].[ext]',
	    		outputPath:'/img'
	    	}
	    },
	    {
	    	test:/\.vue$/,
	        loader: 'vue-loader',
	    	exclude: require("path").resolve(__dirname,"node_modules")

	    }
	  ]
	},
	plugins: [
	  // new CleanWebpackPlugin(),
	  new vueLoaderPlugin(),
	  new htmlWebpackPlugin({
	  	filename:'app.html',
	  	template:'index.html',
	  	title:'app is good',
	  	inject:'body'
	  }),
	  new htmlWebpackPlugin({
	  	filename:'index.html',
	  	template:'index.html',
	  	title:'webpack is good'
	  }),
	  new htmlWebpackPlugin({
	  	filename:'a.html',
	  	template:'index.html',
	  	inject:'body',
	  	title:'this is a',
	  	chunk:['main','a']
	  }),
	  new htmlWebpackPlugin({
	  	filename:'b.html',
	  	template:'index.html',
	  	inject:'body',
	  	title:'this is b',
	  	chunks:['b']
	  }),
	  new htmlWebpackPlugin({
	  	filename:'c.html',
	  	template:'index.html',
	  	inject:'body',
	  	chunks:['c']
	  })
	],
	devServer:{
		contentBase:__dirname+"/dist",
		host:'localhost',
		port:8080,
		hot:true,//热更新
		open:true,//运行完打开
		openPage:'index.html'
	}
}