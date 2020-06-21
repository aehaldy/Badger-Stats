//import React, { useState, useEffect } from 'react';

export const printCharts = (iframe) => {
  const iframeWindow = iframe.contentWindow || iframe;

  iframe.focus();
  iframeWindow.print();

  return false;
};

// export const printCharts = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   const handleMessage = (event) => {
//     if (event.data.action === 'charts-loaded') {
//       setIsLoading(false);
//     }
//   };

//   const printIframe = (id) => {
//     const iframe = document.frames
//       ? document.frames[id]
//       : document.getElementById(id);
//     const iframeWindow = iframe.contentWindow || iframe;

//     iframe.focus();
//     iframeWindow.print();

//     return false;
//   };

//   useEffect(() => {
//     window.addEventListener('message', handleMessage);

//     return () => {
//       window.removeEventListener('message', handleMessage);
//     };
//   }, []);

//   return (
//     <div>
//       <iframe
//         id="charts"
//         src="/chartsForPrint"
//         style={{ display: 'none' }}
//         title="Charts"
//       />
//       <button onClick={() => printCharts('charts')}>
//         {isLoading ? 'Loading...' : 'Print Receipt'}
//       </button>
//     </div>
//   );
// }

