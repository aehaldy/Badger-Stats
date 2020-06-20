import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchool } from './store';

function App() {
  const { name, alias, schoolUrl, city, state, zip } = useSelector(state => state.school);
  const dispatch = useDispatch();

  useEffect( () => {
   dispatch(fetchSchool());
  }, [dispatch]);

  return (
    //If API request is slow, show a loading gif
    <div className="App">
        <p>{name} "{alias}"</p>
        <p> {city}, {state} {zip}</p>
        <a href={`http://${schoolUrl}`}>{schoolUrl}</a>
    </div>
  );
}

export default App;
