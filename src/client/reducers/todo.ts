import { Todo, FetchTodoAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const todoReducer = (state: Todo[] = [], action: FetchTodoAction) => {
  switch (action.type) {
    case ActionTypes.ClickType:
      return action.payload;

    default:
      return state;
  }
};
