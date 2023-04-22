import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  ctaSection: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    padding: theme.spacing(8, 0),
    borderRadius: theme.spacing(2),
  },
  ctaButton: {
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.black,
    },
  },
}));

export default function PricingCTA() {
  const classes = useStyles();

  return (
    <Box className={classes.ctaSection}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Ready to revolutionize your pricing strategy and unlock new growth opportunities?
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Don't miss out on this indispensable resource that will help you reshape your business's future. Get your copy today and embrace the power of pricing!
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="large"
            className={classes.ctaButton}
            onClick={() => console.log('CTA button clicked')}
          >
            Get Your Copy Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
