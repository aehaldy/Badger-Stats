import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [schoolName, setSchoolName] = useState(null);
  const [schoolAlias, setSchoolAlias] = useState(null);
  const [schoolUrl, setSchoolUrl] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip, setZip] = useState(null);
  const [studentPop, setStudentPop] = useState(null);

  useEffect( () => {
    const fetchStats = async () => {
      //fetch data from Flask API
      const res = await fetch('/uwm');
      const data = await res.json();
      console.log('Got data?', data);

      //assign school stats to state
      const school = data.results[0].school;
      const latestStats = data.results[0].latest;
      setSchoolName(school.name);
      setSchoolAlias(school.alias);
      setSchoolUrl(school.school_url);
      setCity(school.city);
      setState(school.state);
      setZip(school.zip);
      setStudentPop(
        latestStats.student.enrollment.grad_12_month +
        latestStats.student.enrollment.undergrad_12_month
      );
    }
    fetchStats();
  }, []);

  return (
    //API request takes a min, so show a loading gif or something
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{schoolName} "{schoolAlias}"</p>
        <a href={`http://${schoolUrl}`}>{schoolUrl}</a>
        <p> {city}, {state} {zip}</p>
        <p>{studentPop} graduates and undergranduates combined</p>
      </header>
    </div>
  );
}

export default App;
