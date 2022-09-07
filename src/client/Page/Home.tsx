import { AnyAction, Store, ThunkDispatch } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { StoreState } from "../reducers";
import { fetchTodo , Todo } from "../actions";


interface PropsData {
fetchTodo: Function;
todo : Todo[]

}

export class Home extends React.Component<PropsData> {

    componentDidMount(){
        this.props.fetchTodo()
    }

    render(): React.ReactNode {

        return (<div>

            <h1>Hello , World</h1>
            <p>
                yes this is working fast yes now again
            </p>
            <button onClick={
                ()  =>  <Navigate to='/2' /> }
                    

                
            >
                click me</button>
        </div>)
    }


}

const mapStateToProps = (state : StoreState) => {
    return {todo : state.todo}
}

export const DataType = (Store: Store)  => {

   return (Store.dispatch as ThunkDispatch<StoreState, unknown, AnyAction>)(fetchTodo())
}

export const HomeClass = connect(mapStateToProps , {fetchTodo})(Home);