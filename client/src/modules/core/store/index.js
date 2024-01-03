import { applyMiddleware, createStore, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { rootSaga } from "src/modules/core/sagas";
import { rootReducer } from "src/modules/core/slices";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

export const makeStore = (context) => {
  const rootReducerWithRouter = combineReducers({
    ...rootReducer,
  });

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducerWithRouter,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(makeStore);

export default wrapper;
