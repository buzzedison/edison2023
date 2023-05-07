import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bookPromo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('/images/book-background.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "4rem 2rem",
    borderRadius: "10px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    marginBottom: "2rem",
  },
  ctaButton: {
    margin: "0 0.5rem",
    textTransform: "none",
  },
}));

function BookPromotion() {
  const classes = useStyles();

  return (
    <div className={classes.bookPromo}>
      <h2 className={classes.title}>Winning Pricing Strategy</h2>
      <p className={classes.description}>
        Discover the secrets to developing a winning pricing strategy for your
        business with our groundbreaking book. Learn how to optimize your
        pricing to drive growth, maximize profits, and create a competitive
        advantage.
      </p>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.ctaButton}
          href="/book-details"
        >
          Learn More
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.ctaButton}
          href="/buy-now"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default BookPromotion;
