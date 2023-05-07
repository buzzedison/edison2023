import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    backgroundColor: '#F3F3F3',
    borderRadius: '15px',
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  body: {
    fontSize: '1rem',
    color: 'gray',
  },
}));

const PricingResources = () => {
  const classes = useStyles();

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        {[
          ['Simple Pricing Calculator', 'A straightforward tool for determining a product\'s pricing based on cost and desired profit margin.'],
          ['Smart Goals Calculator', 'An intuitive calculator that helps you set specific, measurable, achievable, relevant, and time-bound goals.'],
          ['Value Pricing Calculator', 'A dynamic pricing calculator which takes into account various market factors to determine a value-based price.'],
          ['Pricing Strategy Template', 'A comprehensive template to help you establish a well-defined pricing strategy for your product or service.']
        ].map(([title, body]) => (
          <Grid item xs={12} sm={6} lg={3} key={title}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                  {title}
                </Typography>
                <Typography className={classes.body} variant="body2" component="p">
                  {body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingResources;
