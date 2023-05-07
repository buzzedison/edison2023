// pdfGenerator.js
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export async function generatePDF(htmlContent) {
  const pdf = new jsPDF("p", "mm", "a4");
  const canvas = await html2canvas(htmlContent);
  const imgData = canvas.toDataURL("image/png");
  const imgWidth = pdf.internal.pageSize.getWidth();
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  return pdf;
}
