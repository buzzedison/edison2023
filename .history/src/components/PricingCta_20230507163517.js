import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Typography, Grid } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  ctaSection: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    padding: theme.spacing(8, 0),
  },
  ctaButton: {
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function PricingCTA() {
  const classes = useStyles();

  return (
    <Box className={classes.ctaSection}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Ready to revolutionize your pricing strategy and unlock new growth opportunities?
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Don't miss out on this indispensable resource that will help you reshape your business's future. Get your copy today and embrace the power of pricing!
            </Typography>
            <Box>
              <Link href="/pricingstrategy" passHref>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.ctaButton}
                >
                  Get Your Copy Today
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imageContainer}>
            <Image
              src="/pricing.png" // Replace with your desired image URL
              alt="Image placeholder"
              width={400}
              height={600}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
