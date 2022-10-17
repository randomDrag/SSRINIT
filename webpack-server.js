
const path = require('path');
const MiniCssExtractPlugin = require( "mini-css-extract-plugin");
const webpackNodeExternals = require('webpack-node-externals')


// import path from 'path';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import webpackNodeExternals from 'webpack-node-externals'
module.exports ={

    /* target is used when webpack used as node (server) */
    target : 'node',

    entry : './src/index.ts',


    output : {

        filename : 'bundle.js',
        path : path.resolve(__dirname, 'Build')
    },

devtool: "inline-source-map",
    module : {

        rules :[
            {
                test : [/\.ts$/, /\.tsx$/],
                use: 'ts-loader',
                exclude : /node_modules/,
            },{
                test: [/\.css/i,],
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                exclude : /node_modules/,
            },{
                test : [/\.(svg|png|jpg|gif)$/i],
                use : 'url-loader',
            
            }
        
        ]
    }
, plugins : [
    new MiniCssExtractPlugin({
        linkType: 'text/css',
      }),
],
    resolve: {
        extensions: ['.ts','.tsx', '.js']
    }
    ,

    /* this use to not include ext files */
   externals : [webpackNodeExternals()]




}