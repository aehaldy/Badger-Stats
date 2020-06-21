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
    programs: [],
    raceEthnicity: [],
    incomeBrackets: [],
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
    const lowIncome = stats.student.share_lowIncome;
    const lowMidIncome = stats.student.share_middleincome['30001_48000'];
    const highMidIncome = stats.student.share_middleincome['48001_75000'];
    const midHighIncome = stats.student.share_highincome['75001_110000'];
    const highIncome = stats.student.share_highincome['110001plus'];
    const incomes = {
      '$0-30,000': lowIncome,
      '$30,001-48,000': lowMidIncome,
      '$48,001-75,000': highMidIncome,
      '$75,001-110,000': midHighIncome,
      '$110,001-plus': highIncome,
    };
    const incomeBrackets = parseData(incomes);
    console.log('Here is my income data:', incomeBrackets)

    const latest = {
      totalEnrollment,
      programs,
      raceEthnicity,
      incomeBrackets,
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
