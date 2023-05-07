import React, { useState } from 'react';
import {
  makeStyles,
  TextField,
  Typography,
  Box,
  Button,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(4),
  },
  sectionTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}));

const PricingStrategyTemplateForm = () => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    objectives: '',
    targetMarket: '',
    competitiveAnalysis: '',
    costStructure: '',
    pricingModels: '',
    priceSensitivity: '',
    promotionalPricing: '',
    distributionChannels: '',
    implementationAndMonitoring: '',
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form values:', formValues);
  };

  const sections = [
    'Objectives',
    'Target Market',
    'Competitive Analysis',
    'Cost Structure',
    'Pricing Models',
    'Price Sensitivity',
    'Promotional Pricing',
    'Distribution Channels',
    'Implementation and Monitoring',
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Pricing Strategy Template
      </Typography>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        {sections.map((section) => (
          <div key={section}>
            <Typography
              className={classes.sectionTitle}
              variant="h6"
              component="h3"
            >
              {section}
            </Typography>
            <TextField
              className={classes.textField}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              name={section.replace(/ /g, '')}
              value={formValues[section.replace(/ /g, '')]}
              onChange={handleChange}
            />
          </div>
        ))}
        <Box display="flex" justifyContent="center">
          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default PricingStrategyTemplateForm;
