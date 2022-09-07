import React from "react";

import { Route  , Routes as BrowserRouter} from "react-router-dom";
import { RouteConfigObject } from "../helpers/RouteRender";

import { HomeClass , DataType } from "./Page/Home";

/* Route is using a module RouteRender for extracting the Routes for pre fetching the data 

this array contain array of RouteConfig[]

this Route contain three imp parameter path , element and data for prefetching the data

*/



export const Routes:RouteConfigObject[] = [

    {
        path : '/',
        element : <HomeClass/>,
        data : DataType
    }
]

