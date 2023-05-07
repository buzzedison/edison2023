import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WebIcon from '@material-ui/icons/Web';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100%',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  icon: {
    fontSize: '3rem',
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

function Services() {
  const classes = useStyles();

  return (
    <Container className={classes.section}>
      <Typography variant="h4" align="center" className={classes.title}>
        What I Can Do For You
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Empowering your business with cutting-edge solutions and expert guidance
      </Typography>
      <Grid container spacing={4}>
        {[
          {
            icon: <WebIcon />,
            title: 'Build your websites, web apps, and mobile apps',
            description:
              'Leverage my expertise in web and mobile app development to create stunning, high-performance digital experiences that engage and convert your target audience.',
          },
          {
            icon: <BusinessCenterIcon />,
            title: 'Help you start and scale your business',
            description:
              'Work with me to develop a comprehensive business strategy, optimize your operations, and uncover new growth opportunities that drive sustainable success.',
          },
          {
            icon: <AccountBalanceIcon />,
            title: 'Learn how to get the funding you need',
            description:
              'Discover the secrets to securing investment capital and unlock the financial resources needed to fuel your business growth and achieve your goals.',
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box height="100%">
              <Paper className={classes.paper} elevation={2}>
                <Box className={classes.icon}>{item.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
