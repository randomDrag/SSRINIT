
const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')


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
            }
        ]
    }
,
    resolve: {
        extensions: ['.ts','.tsx', '.js']
    }
    ,

    /* this use to not include ext files */
   externals : [webpackNodeExternals()]




}