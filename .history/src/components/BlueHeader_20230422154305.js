import React from 'react';
import { Box, Typography, IconButton, makeStyles } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    height: '40vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginBottom: theme.spacing(2),
  },
  iconButton: {
    color: 'white',
    marginBottom: theme.spacing(2),
  },
}));

function customHeader() {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <IconButton className={classes.iconButton} aria-label="building icon">
        <BuildIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3" className={classes.title}>
      Start, Scale and Profit from Your Business
      </Typography>
    </Box>
  );
}

export default customHeader;
