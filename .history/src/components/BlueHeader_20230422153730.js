import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  iconButton: {
    color: 'white',
  },
}));

function CustomHeader() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.iconButton} aria-label="building icon">
          <BuildIcon fontSize="large" />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Learn, Apply, Iterate, Flourish
        </Typography>
        <div style={{ width: '48px' }} /> {/* Placeholder to keep symmetry */}
      </Toolbar>
    </AppBar>
  );
}

export default CustomHeader;
