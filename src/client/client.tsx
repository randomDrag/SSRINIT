import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./Routes";
import {configureStore} from '@reduxjs/toolkit'
import { reducers } from "./reducers";
import { Provider } from "react-redux";

import { RouteRender } from "../helpers/RouteRender";


declare global {
    interface Window { INITIAL_STATE: {}; }
}



/* to render client side of routes we will use
     RenderRoute from react-dom-config
    RouteRender converting array into react element
*/

const store = configureStore({reducer : reducers, preloadedState : window.INITIAL_STATE})

ReactDOM.hydrate(
    <Provider store={store}>
<BrowserRouter>
    <div>
        {RouteRender(Routes)}
    </div>
    </BrowserRouter>

    </Provider>
    
    
    , document.querySelector('#root'));

