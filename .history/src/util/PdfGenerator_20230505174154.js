import { PDFDocument, rgb } from "pdf-lib";

export const generatePDF = async (formValues) => {
  const pdfDoc= await PDFDocument.create();
  const stream = pdfDoc.pipe(blobStream());

  pdfDoc.registerFont("Helvetica-Bold", "Helvetica-Bold");

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

  const title = "Pricing Strategy Template";
  const headerColor = "#3f51b5";
  const textColor = "#000000";

  // Draw title background
  pdfDoc
    .rect(0, 0, pdfDoc.page.width, 60)
    .fill(headerColor);

  // Write title
  pdfDoc
    .font("Helvetica-Bold")
    .fontSize(24)
    .fillColor("#FFFFFF")
    .text(title, 72, 20);

  let yOffset = 80;
  sections.forEach((section) => {
    // Write section title
    pdfDoc
      .font("Helvetica-Bold")
      .fontSize(18)
      .fillColor(textColor)
      .text(section, 72, yOffset);

    yOffset += 24;

    // Write section content
    pdfDoc
      .font("Helvetica")
      .fontSize(14)
      .fillColor(textColor)
      .text(formValues[section.replace(/ /g, "")], { x: 72, y: yOffset, width: 450 });

    yOffset += pdfDoc.heightOfString(formValues[section.replace(/ /g, "")], { width: 450 }) + 24;
  });

  pdfDoc.end();
  await new Promise((resolve) => stream.on("finish", resolve));
  return stream.toBlob("application/pdf");
};
