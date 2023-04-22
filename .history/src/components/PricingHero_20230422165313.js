import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    position: 'relative',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(rgba(0, 51, 102, 2.5), rgba(0, 51, 102, 0.5)), url('/book-placeholder.jpg')`,
    backgroundPosition: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  heroContent: {
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontWeight: 300,
  },
}));

export default function PricingMain() {
  const classes = useStyles();

  return (
    <Box className={classes.heroSection}>
      <Container maxWidth="md">
        <Box className={classes.heroContent}>
          <Typography variant="h2" component="h1" className={classes.title}>
            Unleash the Power of Pricing: Transform Your Business Strategy
          </Typography>
          <Typography variant="h5" component="p" className={classes.subtitle}>
            Discover the secrets behind effective pricing and unlock your
            business's true potential with this game-changing book.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
