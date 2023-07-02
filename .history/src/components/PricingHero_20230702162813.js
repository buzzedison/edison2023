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
  buyOnGumroadButton: {
    marginRight: theme.spacing(2),
  },
  bookImageWrapper: {
    position: 'relative',
    overflow: 'hidden',
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
              <a href="https://selar.co/ybjy" target="_blank" rel="noopener noreferrer">
                <Button
                  className={classes.buyOnGumroadButton}
                  variant="contained"
                  color="primary"
                >
                  Buy on Selar
                </Button>
              </a>
              <a href="https://www.amazon.com/Winning-Pricing-Strategy-ideal-market-ebook/dp/B09HMZCTXK" target="_blank" rel="noopener noreferrer">
                <Button variant="outlined" color="primary">
                  Buy on Amazon
                </Button>
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.bookImageWrapper}>
                <Image
                  src="/pricingbook.png"
                  alt="Book cover"
                  width={320}
                  height={480}
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
