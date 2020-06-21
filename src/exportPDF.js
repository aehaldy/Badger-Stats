import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const exportPDF = async (elementFromId) => {
  // This function captures a react component from the DOM
  // turns it into a png using Canvas, and then
  // turns THAT into a PDF for download

  let page = elementFromId;
  let pdf = new jsPDF("portrait", "mm", "a4");

  let canvas = await html2canvas(page);
  pdf.addImage(canvas.toDataURL('image/png'), 0, 0, 210, 297);

  pdf.save();
}
