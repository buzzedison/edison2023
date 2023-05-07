import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4), 
  },
  title: {
    fontSize: '2rem',
    fontWeight: 500,
    letterSpacing: '0.02em',
    lineHeight: 1.5,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',

    },
  },
  subtitle: {
    fontSize: '1.25rem',
    fontWeight: 400,
    color: theme.palette.grey[600],
  },
}));

const PricingResourcesTitle = () => {
  const classes = useStyles();

  return (
    <div className={classes.titleContainer}>
      <Typography className={classes.title} variant="h3" component="h1" gutterBottom>
        Resources to Help Your Pricing
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1" component="h2">
        Power your business with our carefully curated tools
      </Typography>
    </div>
  );
};

export default PricingResourcesTitle;
