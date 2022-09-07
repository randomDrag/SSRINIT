import { Dispatch } from "@reduxjs/toolkit";
import { ActionTypes  } from "./types";
import axios from "axios";

/* all actions interface  */

//example

export interface Todo {
    id : number ;
    title : string ;
    completed: boolean;

}



/* dispatch creator interface */

export interface FetchTodoAction {

    type : ActionTypes.ClickType,
    payload : Todo[];

}



/* all actions creator here */


const url:string = '' ;

export const fetchTodo = () =>{ 

    return async (dispatch :Dispatch) => {

        const response = await axios.get<Todo[]>(url);

        dispatch<FetchTodoAction>({
            type : ActionTypes.ClickType,
            payload : response.data
        })

    }


    
}