import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Button, makeStyles } from '@material-ui/core'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Navbar from 'components/Navbar';
import Footer2 from "components/Footer2";
const useStyles = makeStyles((theme) => ({
  accordion: {
    borderRadius: 8,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    marginBottom: theme.spacing(2),
  },
  accordionSummary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  accordionDetails: {
    backgroundColor: theme.palette.background.default,
  },

  ctaSection: {
    backgroundColor: theme.palette.white,
    padding: theme.spacing(4),
    borderRadius: 8,
    marginTop: theme.spacing(4),
    color: theme.palette.common.primary,
  },
  ctaButton: {
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const weeks = [
    {
      title: 'Week 1: "The Entrepreneurial Mindset"',
      content: 'Unleash your inner Elon Musk and learn how to think like a business tycoon. We’ll explore grit, determination, and creativity, and how to harness these traits for success.',
    },
    {
      title: 'Week 2: "The Ideation Station"',
      content: 'Step into the brainstorming bonanza and learn how to spot a winning business idea. We’ll dive into market research, customer personas, and identifying pain points.',
    },
    {
      title: 'Week 3: "The Art of MVP-ing"',
      content: 'Discover the magic of Minimum Viable Products! We\'ll teach you how to create a lean, mean, value-offering machine to test your idea in the market.',
    },
    {
      title: 'Week 4: "The Business Model Buffet"',
      content: 'Feast on a smorgasbord of business models! We\'ll help you find the perfect one to make your business delectably profitable and scalable.',
    },
    {
      title: 'Week 5: "The Financial Finesse"',
      content: 'Become a fiscal ninja and learn the ins and outs of cash flow, budgets, and financial projections. Say goodbye to money meltdowns and hello to fiscal freedom!',
    },
    {
      title: 'Week 6: "The Marketing Maestro"',
      content: 'Master the art of persuasion and learn how to charm your customers with the perfect marketing mix. It\'s time to shine in the spotlight and make your business irresistible.',
    },

    {
        title: 'Week 7: "The Sales Superhero"',
        content: 'Sharpen your sales prowess and learn how to close deals like a pro. No one will be able to resist your business charms!',
      },
      {
        title: 'Week 8: "The Operational Orchestra"',
        content: 'Conduct the symphony of your business operations! We will teach you how to manage workflows, supply chains, and optimize your business processes for maximum efficiency.',
      },
      {
        title: 'Week 9: "The Digital Domination"',
        content: 'Harness the power of the digital world to scale your business to new heights. We will dive into social media, email marketing, and SEO to make your business an online powerhouse.',
      },
      {
        title: 'Week 10: "The Legal and Ethical Eagle"',
        content: 'Fly high above the legal and ethical challenges that may come your way. We will teach you how to navigate business regulations and create a company culture that is a beacon of integrity.',
      },
      {
        title: 'Week 11: "The Team-Building Triumph"',
        content: 'Learn the secrets of building a dream team that will propel your business to success. We will explore hiring, onboarding, and leadership to ensure your company has the perfect crew.',
      },
      {
        title: 'Week 12: "The Pitch Perfect Finale"',
        content: 'Put it all together and showcase your progress in a jaw-dropping pitch that will wow investors and partners alike. This is your moment to shine and secure the future of your business!.Embark on the thrilling journey of securing funds for your business. We will teach you how to build relationships with investors, master the art of pitching, and navigate the world of venture capital, angel investors, and crowdfunding.',
      },
  ];

export default function Blue() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box py={4}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Introducing "Start, Scale and Profit from Your Business"
          </Typography>
          <Typography variant="subtitle1" align="center">
            This is a 12-week program that will help you start, scale and profit from your business using a systematic approach that focuses on five key areas: strategy, marketing, operations, finance and innovation.
          </Typography>
          <Box mt={4}>
            {weeks.map((week, index) => (
              <Accordion key={index} className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}a-content`}
                  id={`panel${index + 1}a-header`}
                  className={classes.accordionSummary}
                >
                  <Typography variant="h6">{week.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography>{week.content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}


          </Box>
        </Box>

        <Box className={classes.ctaSection}>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="subtitle1" align="center" gutterBottom>
              And there you have it – 12 action-packed weeks of entrepreneurial enlightenment, guaranteed to turn your business dreams into a thriving reality. Are you ready to take the plunge?
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.ctaButton}
                // Add the link to the desired page or action
                onClick={() => console.log('CTA button clicked')}
              >
                Get Started
              </Button>
            </Box>
          </Box>
      </Container>
      <Footer2
bgColor="primary"
size="medium"
bgImage=""
bgImageOpacity={1}
description="Business and Brand Strategist, Writer and Coach"
copyright={`© ${new Date().getFullYear()} Buzzedison`}
logo="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
logoInverted="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
sticky={true}
/>
    </>
  );
}
