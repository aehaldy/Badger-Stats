//import React, { useState, useEffect } from 'react';

export const printCharts = (iframe) => {
  const iframeWindow = iframe.contentWindow || iframe;

  iframe.focus();
  iframeWindow.print();

  return false;
};
