import React, { useRef } from 'react';
import { generatePDF } from "./pdfGenerator";
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  accordion: {
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    marginBottom: theme.spacing(1),
    '&:before': {
      display: 'none',
    },
  },
  accordionExpanded: {
    margin: '0 !important',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary: {
    backgroundColor: '#3a78b3',
    color: theme.palette.common.white,
  },
}));

const PricingStrategyTemplate = () => {
  //pdf section
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Get the form data
    const formData = new FormData(event.target);
    // Process form data as needed

    // Generate the PDF
    const pdf = await generatePDF(formRef.current);

    // Display the PDF in a new browser tab
    const pdfBlob = new Blob([pdf.output("blob")], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  //it ends here
  const classes = useStyles();

  const sections = [
    { title: 'Objectives', content: 'Define your overall pricing goals, such as increasing market share, maximizing profit, or achieving a specific return on investment (ROI).' },
    { title: 'Target Market', content: 'Identify your target customers, their needs, preferences, and willingness to pay. Segment your market based on demographics, geography, behavior, or other relevant criteria.' },
    { title: 'Competitive Analysis', content: 'Evaluate your competitors, their offerings, and their pricing strategies. Identify your competitive advantages and how you can differentiate your product or service.' },
    { title: 'Cost Structure', content: 'Calculate your costs, including fixed and variable costs, to determine your break-even point and profit margin. Consider the scalability of your cost structure as your business grows.' },
    { title: 'Pricing Models', content: 'Evaluate different pricing models, such as cost-plus, value-based, or competitive pricing, to determine the best fit for your product or service. Consider tiered pricing, bundle pricing, or other pricing structures that can help you attract different customer segments.' },
    { title: 'Price Sensitivity', content: 'Analyze how sensitive your target customers are to price changes. Conduct price elasticity studies to determine the optimal price range for your product or service.' },
    { title: 'Promotional Pricing', content: 'Develop a strategy for offering discounts, promotions, or other incentives to attract customers and boost sales. Ensure that your promotional pricing aligns with your overall pricing objectives and brand positioning.' },
    { title: 'Distribution Channels', content: 'Identify the most effective channels for distributing your product or service, and consider how your pricing strategy should vary across these channels.' },
    { title: 'Implementation and Monitoring', content: 'Outline a plan for implementing your pricing strategy, including communication with stakeholders, training for sales teams, and updating your pricing in the market. Establish a process for monitoring your pricing performance, including tracking key performance indicators (KPIs) and adjusting your pricing strategy as needed.' },
  ];

  return (
    
      <div className={classes.root}>
        <form onSubmit={handleSubmit} ref={formRef}>
          {sections.map(({ title, content }) => (
            <Accordion
              key={title}
              classes={{ root: classes.accordion, expanded: classes.accordionExpanded }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${title}-content`}
                id={`${title}-header`}
                className={classes.summary}
              >
                <Typography className={classes.heading}>{title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <button type="submit">Generate PDF</button>
        </form>
      </div>
    );
    
          };
export default PricingStrategyTemplate;