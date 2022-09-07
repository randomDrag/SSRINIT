import {configureStore , Store} from '@reduxjs/toolkit';
import {reducers ,StoreState } from '../client/reducers'

export const createStore = () : Store => {

const store = configureStore({ reducer : reducers } )

return store;
}