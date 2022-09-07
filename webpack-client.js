/* this is config file for client side of SSR.
this webpack help to create bundle.js which attached to renderer.ts 
this is public bundle attach as script.

*/

const path = require('path')

module.exports = {

    /* entry file of webpack  */
entry : "./src/client/client.tsx",


/* output file is where and what the name of bundle */

output: {

    filename : "bundle.js",
    path : path.resolve(__dirname , 'public')

},

/* this help to convert it to type script while debugging */
devtool: "inline-source-map",

/* module is main file which making bundle its saying whats its contain and how to fetch it and how to convert it 

rules is saying :test is look that ext and use that compiler aka loader to make bundle and exclude is not you don't want to include

*/
module : {

    rules : [
        {
            test : [/\.ts$/, /\.tsx$/],
            use: 'ts-loader',
            exclude : /node_modules/,
        }
    ]
},

/* this add that ext to import file */
resolve: {
    extensions: ['.ts','.tsx', '.js']
}
    
}