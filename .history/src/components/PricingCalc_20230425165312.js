import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
  title: {
    marginBottom: theme.spacing(2),
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

  const downloadAsPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Pricing Calculation Results', 14, 22);

    doc.autoTable({
      startY: 30,
      head: [['Pricing Strategy', 'Price']],
      body: [
        ['Cost-Plus Pricing', `$${results.costPlus.toFixed(2)}`],
        ['Competitive Pricing', `$${results.competitive.toFixed(2)}`],
        ['Value-Based Pricing', `$${results.valueBased.toFixed(2)}`],
      ],
    });

    doc.save('pricing_calculation_results.pdf');
  };

  return (

    
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" className={classes.title}>
      Simple Pricing Calculator
    </Typography>
    <Typography variant="h6" className={classes.title}>
      Optimize Your Pricing Strategy
    </Typography>
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
            <Button onClick={downloadAsPDF} variant = "contained" color="primary" id="pdf-download-button">
Download as PDF
</Button>
</CardActions>
</Card>
)}

</Container>
);
};

export default PricingCalc;
