import React from 'react'
import Blue from '../components/Blue'
import { Box } from '@material-ui/core';
function blueprint() {
  
  return (
    <div>
 <Box
      sx={{
        pt: 2,
        // Add more styles here
        backgroundColor: 'primary.main',
        borderRadius: 8,
      }}
    >
      <Blue />
    </Box>
    </div>
  )
}

export default blueprint