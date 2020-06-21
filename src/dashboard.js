import React from 'react'
import {Programs} from './programs'
import {Demographics} from './demographics'
import {Incomes} from './incomeLvls'

export const Dashboard = () => {

  return (
    <div>
      <h5>I am beautiful carousel</h5>
      <Demographics />
      <Incomes />
      <Programs />
    </div>
  );
};
