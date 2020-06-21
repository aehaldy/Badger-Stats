import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Pie} from './pie'

export const Programs = () => {
  const programData = useSelector(state => state.latest.programs)

  useEffect(() => {
    //map non-null program data in correct format to datapoints for graph
    console.log('PAssing program data:', programData)
  }, [programData]);

  return (
    <div className="centeringContainer chartSlide">
      {programData.keys && <Pie data={programData} chartTitle="Program Percentages" />}
    </div>
  );
}
