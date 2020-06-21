import React from 'react';
import { useSelector } from 'react-redux';
import {Pie} from './pie'

export const Programs = () => {
  const programData = useSelector(state => state.latest.programs)

  return (
    <div className="centeringContainer chartSlide">
      {programData.keys && <Pie data={programData} chartTitle="Program Percentages" />}
    </div>
  );
}
