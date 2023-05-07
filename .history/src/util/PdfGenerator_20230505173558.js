import { PDFDocument, rgb } from "pdf-lib";

export const generatePDF = async (formData) => {
  const doc = await PDFDocument.create();
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

  const page = doc.addPage();
  const { height } = page.getSize();
  const helveticaFont = await doc.embedFont("Helvetica");

  let currentY = 50;

  const addSection = (title, content, fontSize, isBold) => {
    page.drawText(title, {
      x: 50,
      y: height - currentY,
      size: fontSize,
      font: helveticaFont,
      color: isBold ? rgb(0, 0, 0) : rgb(0.5, 0.5, 0.5),
    });
    currentY += fontSize + 10;

    const lines = content.split("\n");
    lines.forEach((line) => {
      page.drawText(line, {
        x: 50,
        y: height - currentY,
        size: fontSize - 4,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      currentY += fontSize;
    });

    currentY += 20;
  };

  // Set the PDF title
  addSection("Pricing Strategy Template", "", 24, true);

  sections.forEach((section) => {
    const sectionKey = section.replace(/ /g, "");
    addSection(section, formData[sectionKey], 16, true);
  });

  const pdfBytes = await doc.save();
  return pdfBytes;
};
