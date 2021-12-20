// reducer
import { todoApp } from "./reducers";
import { createStore, bindActionCreators } from "redux";
import { addTodo, toggleTodo, setVisibiltyFilters } from "./actions";
export const store = createStore(todoApp);

// 打印初始state
console.log("init", store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(addTodo("reading"));
// store.dispatch(addTodo("swin"));
// store.dispatch(toggleTodo(0));

// // bindActionCreators
// const add = bindActionCreators(addTodo, store.dispatch);
// add("take a bike");
// // 停止监听 state 更新
// unsubscribe();
