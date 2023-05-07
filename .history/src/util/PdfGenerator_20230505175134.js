
import { PDFDocument, rgb } from "pdf-lib";

// Define the sections and their titles
const sections = [
  { key: "Objectives", title: "Objectives" },
  { key: "TargetMarket", title: "Target Market" },
  { key: "CompetitiveAnalysis", title: "Competitive Analysis" },
  { key: "CostStructure", title: "Cost Structure" },
  { key: "PricingModels", title: "Pricing Models" },
  { key: "PriceSensitivity", title: "Price Sensitivity" },
  { key: "PromotionalPricing", title: "Promotional Pricing" },
  { key: "DistributionChannels", title: "Distribution Channels" },
  { key: "ImplementationAndMonitoring", title: "Implementation and Monitoring" },
];

// Define some constants for the layout and style
const PAGE_MARGIN = 50;
const TITLE_SIZE = 24;
const SECTION_SIZE = 16;
const CONTENT_SIZE = SECTION_SIZE - 4;
const LINE_SPACING = 10;
const SECTION_SPACING = 20;

export const generatePDF = async (formData) => {
  const doc = await PDFDocument.create();
  const page = doc.addPage();
  const { height } = page.getSize();
  const helveticaFont = await doc.embedFont("Helvetica");

  // A helper function to add a section to the page
  const addSection = (title, content, fontSize, isBold) => {
    // Draw the section title with the given font size and color
    page.drawText(title, {
      x: PAGE_MARGIN,
      y: height - currentY,
      size: fontSize,
      font: helveticaFont,
      color: isBold ? rgb(0, 0, 0) : rgb(0.5, 0.5, 0.5),
    });
    // Move the current position down by the font size and line spacing
    currentY += fontSize + LINE_SPACING;

    // Split the content by newline characters and draw each line
    const lines = content.split("\n");
    lines.forEach((line) => {
      page.drawText(line, {
        x: PAGE_MARGIN,
        y: height - currentY,
        size: CONTENT_SIZE,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      // Move the current position down by the content size
      currentY += CONTENT_SIZE;
    });

    // Add some extra space between sections
    currentY += SECTION_SPACING;
  };

  // Initialize the current position
  let currentY = PAGE_MARGIN;

  // Set the PDF title
  addSection("Pricing Strategy Template", "", TITLE_SIZE, true);

  // Loop through the sections and add them to the page
  sections.forEach((section) => {
    addSection(section.title, formData[section.key], SECTION_SIZE, true);
  });

  // Save the PDF and return the bytes
  const pdfBytes = await doc.save();
  return pdfBytes;
};
