import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  resultsCard: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
}));

const PricingCalc = () => {
  const classes = useStyles();
  const [cost, setCost] = useState('');
  const [margin, setMargin] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [results, setResults] = useState(null);

  const calculatePricing = () => {
    const costNum = parseFloat(cost);
    const marginNum = parseFloat(margin);
    const minPriceNum = parseFloat(minPrice);
    const maxPriceNum = parseFloat(maxPrice);

    const costPlus = costNum * (1 + marginNum / 100);
    const competitive = (minPriceNum + maxPriceNum) / 2;
    const valueBased = (minPriceNum + competitive) / 2;

    setResults({
      costPlus,
      competitive,
      valueBased,
    });
  };

  const downloadAsPDF = async () => {
    const pdfHeading = document.createElement('h1');
    pdfHeading.innerText = 'Pricing Calculation Results';
    pdfHeading.style.textAlign = 'center';
    pdfHeading.style.marginBottom = '1rem';
  
    const resultsCard = document.getElementById('results-card');
    const pdfButton = document.getElementById('pdf-download-button');
    pdfButton.style.display = 'none';
  
    const pdfContainer = document.createElement('div');
    pdfContainer.appendChild(pdfHeading);
    pdfContainer.appendChild(resultsCard.cloneNode(true));
  
    setTimeout(async () => {
      const canvas = await html2canvas(pdfContainer);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('pricing_calculation_results.pdf');
  
      pdfButton.style.display = 'block';
    }, 100);
  };
  return (
    <Container maxWidth="sm" className={classes.container}>
      <TextField className={classes.input} label="Product/Service Cost" value={cost} onChange={(e) => setCost(e.target.value)} fullWidth />
      <TextField className={classes.input} label="Desired Profit Margin (%)" value={margin} onChange={(e) => setMargin(e.target.value)} fullWidth />
      <TextField className={classes.input} label="Market Price Range - Minimum" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} fullWidth />
      <TextField className={classes.input} label="Market Price Range - Maximum" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} fullWidth />

      <Button onClick={calculatePricing} variant="contained" color="primary">
        Calculate
      </Button>

      {results && (
        <Card className={classes.resultsCard} id="results-card">
          <CardContent>
            <Typography variant="h6">Cost-Plus Pricing: ${results.costPlus.toFixed(2)}</Typography>
            <Typography variant="h6">Competitive Pricing: ${results.competitive.toFixed(2)}</Typography>
            <Typography variant="h6">Value-Based Pricing: ${results.valueBased.toFixed(2)}</Typography>
          </CardContent>
          <CardActions>
          <Button onClick={downloadAsPDF} 
          variant="contained"
           color="primary"
           id="pdf-download-button"
           >
              Download as PDF
            </Button>
          </CardActions>
        </Card>
      )}
    </Container>
  );
};
export default PricingCalc;
