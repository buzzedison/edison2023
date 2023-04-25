import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Snackbar,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const GoalSetting = () => {
  const [goal, setGoal] = useState({
    specific: 'Describe what should be achieved',
    measurable: 'How will the goal be measured(e.g website traffic, leads?)',
    achievable: 'Is the goal to hit a target number or increase by an amount?',
    relevant: 'What will be the change or result',
    timeBound: 'What is the deadline when the goal must be achieved?',
  });
  const [generatedGoal, setGeneratedGoal] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneratedGoal(
      `I want to ${goal.specific} my ${goal.measurable} by ${goal.timeBound}. I will measure my progress by ${goal.achievable}, and I am confident that I have the skills, resources, and time to achieve this goal. This goal is relevant because ${goal.relevant}, and I am committed to achieving it by ${goal.timeBound}.`
    );
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedGoal], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'SMART_Goal.txt';
    document.body.appendChild(element);
    element.click();
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
      {generatedGoal && (
        <Card style={{ marginTop: '1rem', backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h6" component="h2">
              Your SMART Goal:
            </Typography>
            <Typography variant="body1">{generatedGoal}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownload}
            >
              Download SMART Goal
            </Button>
          </CardActions>
        </Card>
      )}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          SMART goal generated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default GoalSetting;
