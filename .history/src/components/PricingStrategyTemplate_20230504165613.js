import React from 'react';
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
  const classes = useStyles();

  const sections = [
    // ...
  ];

  return (
    <div className={classes.root}>
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
            <Typography>{content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default PricingStrategyTemplate;
