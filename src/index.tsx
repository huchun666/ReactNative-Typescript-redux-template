import React, {Component} from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import AppContainer from "./containers";
import rootReducer from "./redux/reducers";
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  rootReducer,
  // composeWithDevTools(
      applyMiddleware(
          thunkMiddleware
      )
  // )
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}