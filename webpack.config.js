var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: ['./src/app.js'],    

    output: {
        path: __dirname +'/public/www',  
        filename: "app.js",   
        publicPath: '/www/'                     
    },

    module: {    
        loaders: [
            { 
                test: /\.less$/, 
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") 
            },        
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,        
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    compact: false
                }        
            },
            {
                test: /\.(png|jpg|gif|ico|txt)$/,
                loader: 'url-loader?name=images/[name].[ext]&limit=8192'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file?name=fonts/[name].[ext]" 
            },
            { 
                test: /\.(woff|woff2)$/,
                loader:"url?name=fonts/[name].[ext]&prefix=font/&limit=5000" 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream" 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?name=svg/[name].[ext]&limit=10000&mimetype=image/svg+xml" 
            }    
        ]                                
    },
    plugins: [
        new ExtractTextPlugin('app.css', { allChunks: true }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })           
    ],
   
};

