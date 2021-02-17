import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeArgs = [applyMiddleware(sagaMiddleware), applyMiddleware(thunk)];
  if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {
    composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(rootReducer, compose.apply(undefined, composeArgs));

  sagaMiddleware.run(rootSaga);

  return store;
}
