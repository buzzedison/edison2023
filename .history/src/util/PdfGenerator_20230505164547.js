import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = async (form) => {
  // Create a new jsPDF instance
  const pdf = new jsPDF();

  // Set up the PDF styles
  pdf.setFontSize(18);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(33, 33, 33);

  // Add a title
  pdf.text("Pricing Strategy Template Results", 15, 25);

  // Collect the form data
  const formData = [...new FormData(form)].reduce(
    (obj, [key, value]) => ({
      ...obj,
      [key]: value,
    }),
    {}
  );

  // Define the table columns
  const columns = [
    { header: "Section", dataKey: "section" },
    { header: "Content", dataKey: "content" },
  ];

  // Prepare the table data
  const data = Object.entries(formData).map(([key, value]) => ({
    section: key,
    content: value,
  }));

  // Set up the table styles
  const tableStyles = {
    startY: 40,
    headStyles: {
      fillColor: [58, 120, 179],
      textColor: 255,
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [235, 240, 245],
    },
    columnStyles: {
      0: { cellWidth: 55 },
      1: { cellWidth: "auto" },
    },
  };

  // Add the table to the PDF
  pdf.autoTable(columns, data, tableStyles);

  return pdf;
};

export { generatePDF };
