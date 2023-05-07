import { PDFDocument } from 'pdf-lib';


const createSection = async (pdfDoc, formValues, section, yOffset) => {
  const page = pdfDoc.addPage([600, 800]);

  const titleFont = await pdfDoc.embedFont("Helvetica-Bold");
  const contentFont = await pdfDoc.embedFont("Helvetica");

  // Section title
  page.drawText(section, {
    x: 50,
    y: 800 - yOffset,
    size: 18,
    font: titleFont,
    color: rgb(1, 1, 1),
  });

  // Background color for title
  page.drawRectangle({
    x: 50,
    y: 800 - yOffset - 5,
    width: 500,
    height: 30,
    color: rgb(0.235, 0.486, 0.659),
  });

  // Section content
  const text = formValues[section.replace(/ /g, "")];
  const textWidth = contentFont.widthOfTextAtSize(text, 12);
  const textLines = Math.ceil(textWidth / 450);

  page.drawText(text, {
    x: 50,
    y: 800 - yOffset - 40,
    size: 12,
    font: contentFont,
    color: rgb(0, 0, 0),
    lineHeight: 18,
    maxWidth: 450,
  });

  // Draw a card around the section
  page.drawRectangle({
    x: 45,
    y: 800 - yOffset - 50 - textLines * 18,
    width: 510,
    height: 70 + textLines * 18,
    borderColor: rgb(0.8, 0.8, 0.8),
    borderWidth: 2,
    borderRadius: 8,
  });

  return 70 + textLines * 18;
};

export const generatePDF = async (formValues) => {
  const pdfDoc = new PDFDocument();
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

  let yOffset = 40;

  for (const section of sections) {
    yOffset += await createSection(pdfDoc, formValues, section, yOffset);
    if (yOffset > 750) {
      yOffset = 40;
    }
  }

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};
