import React, { ReactNode } from 'react';
import {  RouteMatch ,Routes as BrowserRouter, RouteObject  , Route  , PathRouteProps , IndexRouteProps , LayoutRouteProps} from 'react-router-dom';


/* RouterRender is working as ReactRouterConfig here  its convert array into React.Node elements */


 export interface RouteConfigObject<T = any> extends RouteObject {

    data?: T;
    path : string;
    

}

export interface DataAdder<T = any> extends RouteObject {

    data?: T;
   
    

}

/* used for matching route and check all the promise */
export interface RouteMatchCustom extends RouteMatch {

  route: DataAdder
 

}


export const RouteRender = (RouteList : RouteConfigObject[] ):ReactNode => {

        return <BrowserRouter>
             
            {RouteList.map((i:RouteObject , index:number):ReactNode => {

              
                    
                    return <Route key={index}  path={i.path} element={i.element} />

                

            })}

             </BrowserRouter>


}

// interface matchRoutePathProps extends  {}


export const matchRoutePath = () => {

}