import React from 'react';
import Blue from '../components/Blue';
import { Box } from '@material-ui/core';

function Blueprint() {
  return (
    <div>
      <Box
        style={{
          paddingTop: '2rem',
          paddingBottom: '0rem',
        //   backgroundColor: '#3f51b5', // Replace this with your desired primary color
          borderRadius: 8,
        }}
      >
        <Blue />
      </Box>
    </div>
  );
}

export default Blueprint;
