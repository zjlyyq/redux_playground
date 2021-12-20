import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "./redux-train";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
const rootElement = document.getElementById("root");

const Root = ({ store }) => {
  // console.log("store", store);
  return (
    // 用 <Provider /> 包裹 <Router />，便于路由处理器访问store
    <Provider store={store}>
      <Router>
        <Route path="/app" component={App}></Route>
      </Router>
    </Provider>
  );
};
ReactDOM.render(
  <StrictMode>
    <Root store={store} />
  </StrictMode>,
  rootElement
);
