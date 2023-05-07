const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("Form submitted:", formValues);

  // Generate the PDF
  const pdf = await generatePDF(formValues);

  // Display the PDF in a new browser tab
  const pdfBlob = new Blob([pdf.output("blob")], { type: "application/pdf" });
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, "_blank");
};
