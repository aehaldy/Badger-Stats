import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSchool } from './store';
import {Programs} from './programs'

export const Dashboard = () => {

  return (
    <div>
      <h5>I am a big ol dashboard!</h5>
      <Programs />
    </div>
  )
};
