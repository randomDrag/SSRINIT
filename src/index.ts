/* basic express setup in typeScript with Renderer func

get req is to send first file to client side 
*/

import express, { Express, Request, Response, RequestHandler } from "express";
import {Routes} from './client/Routes';
import { createStore } from "./helpers/createStore";
import { Renderer } from "./helpers/renderer";
import { matchRoutes } from "react-router-dom"
import { RouteMatchCustom } from "./helpers/RouteRender";



enum PORT {
  PORT = 3000,
}

const app: Express = express();

app.use(express.static("public"));

app.get("*", (req: Request, res: Response): void => {
  
  const store = createStore();

  const promise = matchRoutes(Routes , req.path)?.map((route: RouteMatchCustom) : RouteMatchCustom[] | null =>{
    
    return route.route.data ? route.route.data(store) : null

  })

  if (promise) {

    Promise.all(promise).then(()=>{

      res.send(Renderer(req , store ));
    })
    

  }

});

app.listen(PORT.PORT, (): void => {
  console.log(`app is running in PORT ${PORT.PORT}`);
});
