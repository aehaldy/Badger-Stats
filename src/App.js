import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from './store';

//Components
import {Navbar} from './components/navbar'
import { Dashboard } from './components/dashboard';

function App() {
  const { name, alias, schoolUrl, city, state, zip } = useSelector(state => state.school);
  const enrollment = useSelector(state => state.latest.totalEnrollment);
  const dispatch = useDispatch();

  useEffect( () => {
   dispatch(fetchStats());
  }, [dispatch]);

  return (
    //If API request is slow, show a loading gif
    <div className="app" id="printAll">
      <Navbar appFromId={document.getElementById('printAll')} />
      <Dashboard />
      <div className="schoolInfo">
        <p id="currentSchool">From student population of {enrollment} at:</p>
        <p className="address">
          {name} {alias && alias}
        </p>
        <p className="address">
          {city}, {state} {zip}
        </p>
        <a href={`http://${schoolUrl}`}>{schoolUrl}</a>
      </div>
    </div>
  );
}

export default App;
