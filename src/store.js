import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {parseData} from './nivoParser'

const initialState = {
  school: {
    name: null,
    alias: null,
    schoolUrl: null,
    city: null,
    state: null,
    zip: null,
  },
  latest: {
    totalEnrollment: null,
    programs: {},
    raceEthnicity: {},
    //male & female earnings & debt over 5 years?
  },
};

const GOT_SCHOOL = 'GOT_SCHOOL';
// const GOT_LATEST = 'GOT_LATEST';

const setSchool = (school, latest) => ({
  type: GOT_SCHOOL,
  school,
  latest,
});

export const fetchSchool = () => {
  return async (dispatch) => {
    //fetch data from Flask API
    const res = await fetch('/api/school');
    const data = await res.json();

    const {name, alias, school_url, city, state, zip} = data.results[0].school;
    const school = {
      name,
      alias,
      schoolUrl: school_url,
      city,
      state,
      zip,
    };

    const stats = data.results[0].latest;
    const undergraduates = stats.student.enrollment.undergrad_12_month;
    const graduates = stats.student.enrollment.grad_12_month;
    const totalEnrollment = undergraduates + graduates;
    const programs = parseData(stats.academics.program_percentage);
    const raceEthnicity = parseData(stats.student.demographics.race_ethnicity);

    const latest = {
      totalEnrollment,
      programs,
      raceEthnicity,
    };

    dispatch(setSchool(school, latest));
  };
};

// export const fetchLatest = () => {
//   return async (dispatch) => {
//     //fetch data from Flask API
//     const res = await fetch('/api/latest');
//     const data = await res.json();
//     console.log('Got Latest?', data);

//     //set latest stats from data
//     dispatch(setLatest(latest));
//   }
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SCHOOL:
      return { ...state, school: action.school, latest: action.latest };
    // case GOT_LATEST:
    //   return { ...state, latest: action.latest };
    default:
      return state;
  }
};

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware);
const store = createStore(reducer, middlewares);

export default store;
