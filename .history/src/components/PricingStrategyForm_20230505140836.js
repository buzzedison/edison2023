// PricingStrategyForm.js
import React, { useRef } from 'react';
import { generatePDF } from './PdfGenerator';
import PricingStrategyTemplate from './PricingStrategyTemplate';

function PricingStrategyForm() {
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Get the form data
    const formData = new FormData(event.target);
    // Process form data as needed

    // Generate the PDF
    const pdf = await generatePDF(formRef.current);

    // Display the PDF in a new browser tab
    const pdfBlob = new Blob([pdf.output('blob')], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank');
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* Add form fields here for the user to fill out */}
      
      {/* Add the PricingStrategyTemplate */}
      <PricingStrategyTemplate />
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default PricingStrategyForm;
