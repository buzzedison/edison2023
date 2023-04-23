import GoalSetting from 'components/SettingGoals';
import React from 'react';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
      marginTop: theme.spacing(4),
    },
  }));
  
  const GoalSettingPage = () => {
    const classes = useStyles();

const HomePage = () => {
  return (
    <>
    <Container maxWidth="md">
      <Box component="main" className={classes.mainContainer}>
        <GoalSetting />
      </Box>
    </Container>
    </>
  );
};
  };
export default HomePage;
