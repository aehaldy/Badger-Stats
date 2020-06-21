import React from 'react';
import { Programs } from './programs';
import { Demographics } from './demographics';
import { Incomes } from './incomeLvls';

// This component exists only to render all the
// charts for export as a PDF or for printing

export const AllCharts = () => {
  return (
    <div>
      <Demographics />
      <Incomes />
      <Programs />
    </div>
  );
}
