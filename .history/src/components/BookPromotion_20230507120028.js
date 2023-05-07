import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const BookPromo = styled("div")(({ theme }) => ({
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
}));

const Title = styled("h2")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
});

const Description = styled("p")({
  fontSize: "1.2rem",
  maxWidth: "800px",
  marginBottom: "2rem",
});

const CTAButton = styled(Button)(({ theme }) => ({
  margin: "0 0.5rem",
  textTransform: "none",
}));

function BookPromotion() {
  return (
    <BookPromo>
      <Title>Winning Pricing Strategy</Title>
      <Description>
        Discover the secrets to developing a winning pricing strategy for your
        business with our groundbreaking book. Learn how to optimize your
        pricing to drive growth, maximize profits, and create a competitive
        advantage.
      </Description>
      <div>
        <CTAButton variant="contained" color="primary" href="/book-details">
          Learn More
        </CTAButton>
        <CTAButton variant="contained" color="secondary" href="/buy-now">
          Buy Now
        </CTAButton>
      </div>
    </BookPromo>
  );
}

export default BookPromotion;
