import GoalSetting from 'components/SettingGoals';
import React from 'react';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'components/Navbar';
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: theme.spacing(4),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
    <Navbar/>
      <Container maxWidth="md">
        <Box component="main" className={classes.mainContainer}>
          <GoalSetting />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
