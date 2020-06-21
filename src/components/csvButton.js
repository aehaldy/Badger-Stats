import React from 'react'
import { CSVLink } from "react-csv";

export const CSVbutton = ({data}) => {
  // Right now the data is in raw chart format
  // It would be nice to re-format it for a cleaner CSV

  if (data) {
    return (
      <CSVLink data={data} filename={'chart.csv'} className="headerbtn">
        Download CVS
      </CSVLink>
    );
  }
  return <button className="headerbtn">Download CVS</button>;
}
