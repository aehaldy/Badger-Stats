import React from 'react'
import {exportPDF} from './exportPDF'
import {printCharts} from './printCharts'


export const Navbar = ({appFromId}) => {
  return (
    <header>
      <div>
        <img
          className="logo"
          src="/title.png"
          alt="Title logo for Badger Stats"
          onClick={() => window.location.reload(false)}
        />
      </div>
      <div className="dropdown">
        <button className="dropbtn headerbtn" type="button">
          Menu
        </button>
        <div className="dropdown-content">
          <button
            type="button"
            className="headerbtn"
            onClick={() => exportPDF(appFromId)}
          >
            Download PDF
          </button>
          <button
            type="button"
            className="headerbtn"
            onClick={() => 'exportCSV'}
          >
            Download CSV
          </button>
          <button
            type="button"
            className="headerbtn"
            onClick={() => {
              const iframe = document.frames
                ? document.frames['charts']
                : document.getElementById('charts');
              printCharts(iframe);
            }}
          >
            Print Charts
          </button>
          <iframe
            id="charts"
            src="/src/documentCharts.js"
            style={{ display: 'none' }}
            title="Charts"
          />
        </div>
      </div>
    </header>
  );
}
