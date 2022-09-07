import {combineReducers} from '@reduxjs/toolkit';

import {Todo} from '../actions'


/* store interface list */
export interface StoreState {
todo : Todo[]
}


/* Reducer for combine Result */

export const reducers = combineReducers({

})