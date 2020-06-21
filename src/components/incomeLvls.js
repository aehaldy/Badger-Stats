import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from './pie';

export const Incomes = () => {
  const incomeData = useSelector((state) => state.latest.incomeBrackets);
  const elementFromId = document.getElementById('incomeLvls');

  return (
    <div className="centeringContainer chartSlide" id="incomeLvls">
      {incomeData.keys && elementFromId && (
        <Pie
          data={incomeData}
          chartTitle="Income Bracket Percentages"
          elementFromId={elementFromId}
        />
      )}
    </div>
  );
};
