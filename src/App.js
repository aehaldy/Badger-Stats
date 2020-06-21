import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from './store';

//Components
import { Navbar } from './components/navbar'
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
      <Navbar schoolData={{ name, alias, schoolUrl, city, state, zip, enrollment }} />
      <Dashboard />
    </div>
  );
}

export default App;
