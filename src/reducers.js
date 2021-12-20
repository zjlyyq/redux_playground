import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  VisibilityFilters
} from "./actionTypes";
import { combineReducers } from "redux";

// const initState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// };

// reducer
const todos = function (state = [], action) {
  if (action.type === ADD_TODO) {
    return [
      ...state,
      {
        text: action.text,
        completed: false
      }
    ];
  } else if (action.type === TOGGLE_TODO) {
    return state.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      }
      return todo;
    });
  }
  return state;
};
const { SHOW_ALL } = VisibilityFilters;
const visibilityFilter = function (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
// reducer 合成
/*
注意每个 reducer 只负责管理全局 state 中它负责的一部分。
每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。
*/
// const todoApp = function (state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.filter, action),
//     todos: todos(state.todos, action)
//   };
// };

/*
最后，Redux 提供了 combineReducers() 工具类来做上面 todoApp 做的事情，
这样就能消灭一些样板代码了。有了它，可以这样重构 todoApp：
*/
export const todoApp = combineReducers({ visibilityFilter, todos });
// console.log(todoApp);
