import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Slider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  slider: {
    width: '90%',
    marginBottom: theme.spacing(2),
  },
}));

const ValueBasedPricing = () => {
  const classes = useStyles();
  const [highestWTP, setHighestWTP] = useState('');
  const [lowestWTP, setLowestWTP] = useState('');
  const [competition, setCompetition] = useState(0);
  const [marketConditions, setMarketConditions] = useState(0);
  const [costStructure, setCostStructure] = useState(0);
  const [valueBasedPrice, setValueBasedPrice] = useState('');

  const calculateValueBasedPrice = () => {
    const highestWTPNum = parseFloat(highestWTP);
    const lowestWTPNum = parseFloat(lowestWTP);

    const averageWTP = (highestWTPNum + lowestWTPNum) / 2;

    const adjustedPrice =
      averageWTP +
      averageWTP * competition * 0.1 +
      averageWTP * marketConditions * 0.1 +
      averageWTP * costStructure * 0.1;

    setValueBasedPrice(adjustedPrice.toFixed(2));
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" component="h1" gutterBottom>
        Value-Based Pricing Calculator
      </Typography>
      <TextField
        className={classes.input}
        label="Highest Willingness to Pay"
        value={highestWTP}
        onChange={(e) => setHighestWTP(e.target.value)}
        fullWidth
      />
      <TextField
        className={classes.input}
        label="Lowest Willingness to Pay"
        value={lowestWTP}
        onChange={(e) => setLowestWTP(e.target.value)}
        fullWidth
      />

      <div className={classes.sliderContainer}>
        <Typography id="competition-slider" gutterBottom>
          Competition
        </Typography>
        <Slider
          className={classes.slider}
          value={competition}
          min={-1}
          max={1}
          step={0.1}
          onChange={(e, value) => setCompetition(value)}
          valueLabelDisplay="auto"
          aria-labelledby="competition-slider"
        />

        <Typography id="market-conditions-slider" gutterBottom>
          Market Conditions
        </Typography>
        <Slider
          className={classes.slider}
          value={marketConditions}
          min={-1}
          max={1}
          step={0.1}
          onChange={(e, value) => setMarketConditions(value)}
          valueLabelDisplay="auto"
          aria-labelledby="market-conditions-slider"
        />

        <Typography id="cost-structure-slider" gutterBottom>
          Cost Structure
        </Typography>
        <Slider
          className={classes.slider}
          value={costStructure}
          min={-1}
          max={1}
          step={0.1}
          onChange={(e, value) => setCostStructure(value)}
          valueLabelDisplay="auto"
          aria-labelledby="cost-structure-slider"
        />
      </div>

      <Button
        onClick={calculateValueBasedPrice}
        variant="contained"
        color="primary"
        style={{ marginBottom: '16px' }}
      >
        Calculate
      </Button>

      {valueBasedPrice && (
        <Card className={classes.resultsCard}>
          <CardContent>
            <Typography variant="h6">
              Value-Based Price: ${valueBasedPrice}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default ValueBasedPricing;

