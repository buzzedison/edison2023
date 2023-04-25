import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
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
}));

const ValueBasedPricing = () => {
  const classes = useStyles();
  const [highestWTP, setHighestWTP] = useState('');
  const [lowestWTP, setLowestWTP] = useState('');
  const [valueBasedPrice, setValueBasedPrice] = useState('');

  const calculateValueBasedPrice = () => {
    const highestWTPNum = parseFloat(highestWTP);
    const lowestWTPNum = parseFloat(lowestWTP);

    const averageWTP = (highestWTPNum + lowestWTPNum) / 2;
    setValueBasedPrice(averageWTP.toFixed(2));
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
      <Button
        onClick={calculateValueBasedPrice}
        variant="contained"
        color="primary"
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
