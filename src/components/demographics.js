import React from 'react'
import { useSelector } from 'react-redux'
import { Pie } from './pie'


export const Demographics = () => {
  const raceData = useSelector((state) => state.latest.raceEthnicity);
  const elementFromId = document.getElementById('demographics');

  return (
    <div className="centeringContainer chartSlide" id="demographics">
      {raceData.keys && elementFromId && (
        <Pie
          data={raceData}
          chartTitle="Race & Ethnicity Percentages"
          elementFromId={elementFromId}
        />
      )}
    </div>
  );
};
