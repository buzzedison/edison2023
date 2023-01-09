import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  media: {
    height: 500,
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: -(theme.spacing(15) / 2),
  },
  avatarBorder: {
    borderRadius: "50%",
    padding: "7px",
    backgroundColor: "white",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function TeamBiosSection(props) {
  const classes = useStyles();

  const items = [
    {
      image: "https://buzzedison.com/wp-content/uploads/2023/01/pricing.svg",
      name: "Winning Pricing Strategy",
      role: "",
    },
    {
      image: "https://buzzedison.com/wp-content/uploads/2023/01/2-1.png",
      name: "The Productivity Playbook",
      role: "",
    },
    {
      image:
        "https://buzzedison.com/wp-content/uploads/2023/01/The-Art-of-Strategy-.svg",
      name: "The Art of Strategy",
      role: "",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title={item.name}
                />
                <Box p={3}>
                  <Box textAlign="center">
                    <Typography variant="body2" component="p">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
