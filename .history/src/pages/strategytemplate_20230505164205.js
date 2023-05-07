import React, { useState, useRef } from 'react';
import Navbar from 'components/Navbar';
import Footer2 from "components/Footer2";
import { generatePDF } from "../util/PdfGenerator";
import {
  makeStyles,
  TextField,
  Typography,
  Box,
  Button,
  Container,
  Grid,
} from '@material-ui/core';
import PricingStrategyTemplate from 'components/PricingStrategyTemplate';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(2),
  },
  sectionTitle: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const PricingStrategyTemplateForm = () => {
  const classes = useStyles();
  const formRef = useRef();

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

  const initialValues = sections.reduce(
    (values, section) => ({
      ...values,
      [section.replace(/ /g, '')]: '',
    }),
    {}
  );

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted:', formValues);

    // Generate the PDF
    const pdf = await generatePDF(formRef.current);

    // Display the PDF in a new browser tab
    const pdfBlob = new Blob([pdf.output("blob")], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  return (
    <div>
        <Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />

      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Pricing Strategy Template
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <form ref={formRef} onSubmit={handleSubmit} className={classes.formContainer}>
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
          </Grid>
          <Grid item xs={12} md={8}>
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

</Grid>
<Grid item xs={12} md={4}>
  <PricingStrategyTemplate/>
</Grid>
</Grid>
</Container>
<Footer2
  // bgColor="primary"
  size="medium"
  bgImage=""
  bgImageOpacity={1}
  description=""
  copyright={`© ${new Date().getFullYear()} Buzzedison`}
  logo="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
  logoInverted="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
  sticky={true}
/>
</div>
);
};

export default PricingStrategyTemplateForm;


