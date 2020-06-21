import React from 'react'
import { ResponsivePieCanvas } from '@nivo/pie'

export const Pie = ({ data, chartTitle }) => (
  <div>
    <div style={{ height: '300px', width: '395px', margin: 'auto' }}>
      <ResponsivePieCanvas
        data={data}
        margin={{ top: 20, right: 110, bottom: 5, left: 100 }}
        pixelRatio={2}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={1}
        colors={{ scheme: 'paired' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', '0.4']] }}
        //enableRadialLabels={false}
        radialLabelsSkipAngle={8}
        radialLabelsTextXOffset={2}
        radialLabelsTextColor="#2e3f46"
        radialLabelsLinkOffset={-10}
        radialLabelsLinkDiagonalLength={18}
        radialLabelsLinkHorizontalLength={4}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#2e3f46"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
    {/* end of ResponsivePieCanvas */}
    <div className="container">
      <h4>
        <b>{chartTitle}</b>
      </h4>
    </div>
  </div>
);


