import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    position: 'relative',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(rgba(2, 51, 102, 0.5), rgba(0, 51, 102, 0.7)), url('/book-placeholder.jpg')`,
    backgroundPosition: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  heroContent: {
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontWeight: 300,
    marginBottom: theme.spacing(4),
  },
  learnMoreButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function PricingMain() {
  const classes = useStyles();

  return (
    <Box className={classes.heroSection}>
      <Container maxWidth="md">
        <Box className={classes.heroContent}>
          <Typography variant="h2" component="h1" className={classes.title}>
            Unleash the Power of Pricing
          </Typography>
          <Typography variant="h4" component="p" className={classes.subtitle}>
            Transform your business strategy with effective pricing techniques
          </Typography>
          <Button
            className={classes.learnMoreButton}
            variant="contained"
            color="primary"
          >
            Learn More
          </Button>
          <Button variant="outlined" color="inherit">
            Buy Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
