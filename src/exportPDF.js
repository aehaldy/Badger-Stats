import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const exportPDF = async (elementFromId) => {
  // This function captures a react component from the DOM
  // turns it into a png using Canvas, and then
  // turns THAT into a PDF for download
  // ...While this WORKS, the output is not ideal
  // The image shows up skewed to fit the page
  // So extra formatting or another approach is needed

  let page = elementFromId;
  let pdf = new jsPDF("portrait", "mm", "a4");

  let canvas = await html2canvas(page);
  pdf.addImage(canvas.toDataURL('image/png'), 0, 0, 210, 297);

  pdf.save();
}
