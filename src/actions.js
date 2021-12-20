import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  VisibilityFilters
} from "./actionTypes";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}
export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}
export function setVisibiltyFilters(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
