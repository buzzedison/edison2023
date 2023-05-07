import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Button, Grid } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.common.white,
  },
  heroContent: {
    textAlign: 'center',
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
  bookImageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '4px',
    boxShadow: theme.shadows[4],
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  bookImage: {
    objectFit: 'cover',
  },
}));

export default function PricingMain() {
  const classes = useStyles();

  return (
    <Box className={classes.heroSection}>
      <Container maxWidth="md">
        <Box className={classes.heroContent}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6}>
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
              <Button variant="outlined" color="primary">
                Buy Now
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.bookImageWrapper}>
                <Image
                  src="/book-placeholder.jpg"
                  alt="Book cover"
                  width={240}
                  height={360}
                  className={classes.bookImage}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
