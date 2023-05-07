import { PDFDocument, rgb } from "pdf-lib";

export const generatePDF = async (formRef) => {
  const pdfDoc = await PDFDocument.create();
  const pages = [];
  const formValues = formRef.current;
  const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica.Bold);
  const sections = [
    "Objectives",
    "Target Market",
    "Competitive Analysis",
    "Cost Structure",
    "Pricing Models",
    "Price Sensitivity",
    "Promotional Pricing",
    "Distribution Channels",
    "Implementation and Monitoring",
  ];

  for (let i = 0; i < sections.length; i++) {
    const page = pdfDoc.addPage([600, 400]);
    pages.push(page);
    const section = sections[i];
    const content = formValues[section.replace(/ /g, "")];

    // Draw section heading with background color and white text
    page.drawRectangle({
      x: 50,
      y: 325,
      width: 500,
      height: 40,
      color: rgb(0.05, 0.42, 0.62),
    });
    page.drawText(section, {
      x: 55,
      y: 330,
      size: 20,
      font,
      color: rgb(1, 1, 1),
    });

    // Draw content
    page.drawText(content, {
      x: 55,
      y: 280,
      size: 12,
      font,
      lineHeight: 16,
      maxWidth: 490,
    });
  }

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};
