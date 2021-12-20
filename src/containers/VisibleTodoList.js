import TodoLink from "../components/TodoList";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { VisibilityFilters } from "../actionTypes";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};
const mapStateProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export const VisibleTodoList = connect(
  mapStateProps,
  mapDispatchProps
)(TodoLink);
