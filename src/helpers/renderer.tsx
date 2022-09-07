import React from "react";
import {renderToString} from "react-dom/server";
import {Store} from '@reduxjs/toolkit'
import { Request } from "express";
import {StaticRouter} from 'react-router-dom/server';
import {Routes} from "../client/Routes";
import { Provider } from "react-redux";
import { RouteRender } from "./RouteRender";


/* its converting react to string (fetching all the Html from JSX or TSX) and sending to client using express  */

export const Renderer = (req:Request , store : Store ) : string => {

    const _RenderToString = renderToString (
        <Provider store={store}>
        <StaticRouter location={req.path}>
           <div>
            {RouteRender(Routes)}
           </div>
        </StaticRouter>
        </Provider>
    );

    return `
    <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <div id="root">${_RenderToString}</div>
       <script src="bundle.js"></script>
   </body>
   </html>
     
    `;

}
