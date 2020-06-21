import React from 'react'
import { ResponsivePieCanvas } from '@nivo/pie'

export const Pie = ({ data, chartTitle }) => (
  <div>
    <div style={{ height: '300px', width: '390px', margin: 'auto' }}>
      <ResponsivePieCanvas
        data={data}
        margin={{ top: 40, right: 60, bottom: 20, left: 80 }}
        pixelRatio={2}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={1}
        colors={{ scheme: 'paired' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', '0.4']] }}
        // enableRadialLabels={false}
        radialLabelsSkipAngle={8}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={-8}
        radialLabelsLinkDiagonalLength={23}
        radialLabelsLinkHorizontalLength={9}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={8}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        // defs={[
        //   {
        //     id: 'dots',
        //     type: 'patternDots',
        //     background: 'inherit',
        //     color: 'rgba(255, 255, 255, 0.3)',
        //     size: 4,
        //     padding: 1,
        //     stagger: true,
        //   },
        //   {
        //     id: 'lines',
        //     type: 'patternLines',
        //     background: 'inherit',
        //     color: 'rgba(255, 255, 255, 0.3)',
        //     rotation: -45,
        //     lineWidth: 6,
        //     spacing: 10,
        //   },
        // ]}
        // fill={[
        //   {
        //     match: {
        //       id: 'ruby',
        //     },
        //     id: 'dots',
        //   },
        //   {
        //     match: {
        //       id: 'c',
        //     },
        //     id: 'dots',
        //   },
        //   {
        //     match: {
        //       id: 'go',
        //     },
        //     id: 'dots',
        //   },
        //   {
        //     match: {
        //       id: 'python',
        //     },
        //     id: 'dots',
        //   },
        //   {
        //     match: {
        //       id: 'scala',
        //     },
        //     id: 'lines',
        //   },
        //   {
        //     match: {
        //       id: 'lisp',
        //     },
        //     id: 'lines',
        //   },
        //   {
        //     match: {
        //       id: 'elixir',
        //     },
        //     id: 'lines',
        //   },
        //   {
        //     match: {
        //       id: 'javascript',
        //     },
        //     id: 'lines',
        //   },
        // ]}
        // legends={[
        //   {
        //     anchor: 'right',
        //     direction: 'column',
        //     translateX: 140,
        //     itemWidth: 60,
        //     itemHeight: 14,
        //     itemsSpacing: 2,
        //     symbolSize: 14,
        //     symbolShape: 'circle',
        //   },
        // ]}
      />
    </div>
    {/* end of ResponsivePieCanvas */}
    <div class="container">
      <h4>
        <b>{chartTitle}</b>
      </h4>
      <p>Some information about this chart</p>
    </div>
  </div>
);


