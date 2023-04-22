import React from 'react';
import Blue from '../components/Blue';
import { Box, makeStyles } from '@material-ui/core';

function Blueprint() {
  return (
    <div>
      <Box
        sx={{
          pt: 2,
          pb: 30,
          backgroundColor: 'primary.main',
          borderRadius: 8,
        }}
      >
        <Blue />
      </Box>
    </div>
  );
}

export default Blueprint;
