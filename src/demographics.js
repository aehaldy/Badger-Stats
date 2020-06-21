import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Pie } from './pie';

export const Demographics = () => {
  const raceData = useSelector((state) => state.latest.raceEthnicity);

  useEffect(() => {
    console.log('PAssing race data:', raceData);
  }, [raceData]);

  return (
    <div className="centeringContainer chartSlide">
      {raceData.keys && (
        <Pie data={raceData} chartTitle="Race & Ethnicity" />
      )}
    </div>
  );
};
