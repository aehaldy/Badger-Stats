import React from 'react';
import { useSelector } from 'react-redux';
import {Pie} from './pie'

export const Programs = () => {
  const programData = useSelector(state => state.latest.programs);
  const elementFromId = document.getElementById('programs');

  return (
    <div className="centeringContainer chartSlide" id="programs">
      {programData.keys && elementFromId && (
        <Pie
          data={programData}
          chartTitle="Program Percentages"
          elementFromId={elementFromId}
        />
      )}
    </div>
  );
}
