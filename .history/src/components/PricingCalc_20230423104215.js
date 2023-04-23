// pages/pricing-calculator.js
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileSaver from 'file-saver';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  output: {
    marginTop: theme.spacing(2),
  },
  resultCard: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
  },
  resultCardContent: {
    textAlign: 'center',
  },
}));

const PricingCalculator = () => {
  const classes = useStyles();
  const [cost, setCost] = useState('');
  const [margin, setMargin] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [results, setResults] = useState({});

  const calculate = () => {
    const costPlus = cost * (1 + margin / 100);
    const competitive = (parseFloat(minPrice) + parseFloat(maxPrice)) / 2;
    const valueBased = (costPlus + competitive) / 2;

    setResults({
      costPlus,
      competitive,
      valueBased,
    });
  };

  const downloadResults = () => {
    const text = `Cost-Plus Pricing: $${results.costPlus.toFixed(2)}
Competitive Pricing: $${results.competitive.toFixed(2)}
Value-Based Pricing: $${results.valueBased.toFixed(2)}`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, 'pricing-calculator-results.txt');
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h4">Simple Pricing Calculator</Typography>
      <Typography>
        Easily determine your optimal pricing strategy based on factors like cost, desired profit margin, and market conditions with this user-friendly tool.
      </Typography>
      <Box mt={3}>
        <TextField
          label="Product/Service Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className={classes.input}
          fullWidth
        />
        <TextField
          label="Desired Profit Margin (%)"
          value={margin}
          onChange={(e) => setMargin(e.target.value)}
          className={classes.input}
          fullWidth
        />
        <TextField
          label="Market Price Range - Minimum"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className={classes.input}
          fullWidth
        />
        <TextField
          label="Market Price Range - Maximum"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className={classes.input}
          fullWidth
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={calculate}>
          Calculate
        </Button>
      </Box>
      {results.costPlus && (
        <Box className={classes.output}>
          <Card className={classes.resultCard}>
            <CardContent className={classes.resultCardContent}>
              <Typography>
                <strong>Cost-Plus Pricing:</strong> ${results.costPlus.toFixed(2)}
</Typography>
</CardContent>
</Card>
<Card className={classes.resultCard}>
<CardContent className={classes.resultCardContent}>
<Typography>
<strong>Competitive Pricing:</strong> ${results.competitive.toFixed(2)}
</Typography>
</CardContent>
</Card>
<Card className={classes.resultCard}>
<CardContent className={classes.resultCardContent}>
<Typography>
<strong>Value-Based Pricing:</strong> ${results.valueBased.toFixed(2)}
</Typography>
</CardContent>
</Card>
<CardActions>
<Button variant="contained" color="secondary" onClick={downloadResults}>
Download Results
</Button>
</CardActions>
</Box>
)}
</Container>
);
};

export default PricingCalculator;
