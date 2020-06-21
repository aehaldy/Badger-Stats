import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from './pie';

export const Demographics = () => {
  const raceData = useSelector((state) => state.latest.raceEthnicity);

  return (
    <div className="centeringContainer chartSlide">
      {raceData.keys && (
        <Pie data={raceData} chartTitle="Race & Ethnicity Percentages" />
      )}
    </div>
  );
};
