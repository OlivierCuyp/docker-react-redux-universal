import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../ducks/reducer';
import { routerMiddleware } from 'react-router-redux';

const configureStore = (history, initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  );

  return store;
};

export default configureStore;
