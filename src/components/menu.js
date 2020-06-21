import React from 'react';
import { exportPDF } from '../exportPDF';
//import { printCharts } from '../printCharts';
import { CSVbutton } from './csvButton';

export const Menu = ({ data, elementFromId }) => {
  return (
    <div className="dropdown menu">
      <button className="dropbtn" type="button">
        <img src="/menu.png" alt="dropdown menu button" className="menuIcon" />
      </button>
      <div className="dropdown-content">
        <button
          type="button"
          className="headerbtn"
          onClick={() => exportPDF(elementFromId)}
        >
          Download PDF
        </button>
        <CSVbutton data={data} />
        <button
          type="button"
          className="headerbtn"
          onClick={() => {
            //hide menu
            window.print();
          }}
        >
          Print Page
        </button>
      </div>
    </div>
  );
};
