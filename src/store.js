import { createStore, applyMiddleware } from 'redux';
//import axios from 'axios';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  school: {},
  latest: {},
};

const GOT_STATS = 'GOT_STATS';

const setStats = (stats) => ({
  type: GOT_STATS,
  //break down stats
});

export const fetchStats = () => {
  return async (dispatch) => {
    //get stats await
    setStats();
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_STATS:
      return { ...state, school: action.school };
    default:
      return state;
  }
};

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware);
const store = createStore(reducer, middlewares);

export default store;
