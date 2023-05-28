import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Grid, Paper } from '@material-ui/core';
import Navbar from 'components/Navbar';
import Footer2 from 'components/Footer2';
import PricingResources from 'components/PricingTool';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  heading: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  paragraph: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },
}));

const Worksheet = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />
      <Container className={classes.mainContent}>
        <Typography variant="h2" component="h1" className={classes.heading} color="primary">
          Thank you for buying my book.
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper className={classes.paragraph} elevation={1}>
              <Typography variant="body1" component="p">
                You are here because you got one of my books. I update resources here every month as 
                my way to say thank you for your patronage.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <PricingResources/>
      </Container>
      <Footer2
        // bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        description=""
        copyright={`© ${new Date().getFullYear()} Buzzedison`}
        logo="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
        logoInverted="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
        sticky={true}
      />
    </>
  );
}

export default Worksheet;
