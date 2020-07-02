var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
	entry:{
		'app':'./src/app.js',
		'main':'./src/script/main.js',
		'a':'./src/script/a.js',
	    'b':'./src/script/b.js',
	    'c':'./src/script/c.js'},
	output:{
		path:require("path").resolve(__dirname,"dist"),
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
	      test: /\.js$/,
	      use: {
	        loader: 'babel-loader'
	      },
	      exclude: require("path").resolve(__dirname,"node_modules"),
	      include: require("path").resolve(__dirname,"src") 
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
	    	test:/\.sass$/,
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
	    	query:{
	    		limit:200000,
	    		name:'assets/[name].[ext]'
	    	}
	    }
	  ]
	},
	plugins: [
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
	]
}