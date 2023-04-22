import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: `0 8px 16px 0 rgba(0, 51, 102, 0.5)`,
    borderRadius: theme.spacing(2),
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: `0 12px 24px 0 rgba(0, 51, 102, 0.5)`,
    },
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const cards = [
  {
    title: 'Debunk Pricing Myths',
    content:
      'Cut through the confusion and dispel the myths surrounding pricing. Equip yourself with a practical set of principles tailored to your unique business needs.',
  },
  {
    title: 'Master the Art of Pricing',
    content:
      'Dive deep into the world of pricing and understand the logic behind successful models. A surface-level understanding isn\'t enough – become a pricing maestro and drive your business forward.',
  },
  {
    title: 'Navigate the Pricing Evolution',
    content:
      'Adapt to the ever-changing landscape of pricing with ease. This book empowers you to make data-driven decisions that work for your business, regardless of industry or size.',
  },
];

export default function PricingCards() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>{card.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
