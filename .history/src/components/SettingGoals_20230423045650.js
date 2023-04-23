import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@material-ui/core';

const GoalSetting = () => {
  const [goal, setGoal] = useState({
    specific: '',
    measurable: '',
    achievable: '',
    relevant: '',
    timeBound: '',
  });

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(goal);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Gritty Goal-Setting Activity: Your SMART Goal Generator
      </Typography>
      <Typography variant="body1" gutterBottom>
        Ready to turn your entrepreneurial dreams into reality? This interactive
        goal-setting tool will help you create a SMART goal for your venture.
        Just fill in the blanks, and let the magic happen!
      </Typography>
      <Box component="form" onSubmit={handleSubmit} spacing={2}>
        {Object.entries(goal).map(([key, value]) => (
          <TextField
            key={key}
            label={key.toUpperCase()}
            name={key}
            value={value}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Generate SMART Goal
        </Button>
      </Box>
    </Box>
  );
};

export default GoalSetting;
