import React from 'react';
import { useSelector } from 'react-redux';
import { Pie } from './pie';

export const Incomes = () => {
  const incomeData = useSelector((state) => state.latest.incomeBrackets);

  return (
    <div className="centeringContainer chartSlide">
      {incomeData.keys && (
        <Pie data={incomeData} chartTitle="Income Bracket Percentages" />
      )}
    </div>
  );
};
