import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Newsletter from "components/Newsletter";

function NewsletterSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
            textAlign="center"
          />
          <Container maxWidth="sm" disableGutters={true}>
            <Newsletter
              buttonText={props.buttonText}
              buttonColor={props.buttonColor}
              inputPlaceholder={props.inputPlaceholder}
              subscribedMessage={props.subscribedMessage}
            />
          </Container>
        </Box>
      </Container>
    </Section>
  );
}

export default NewsletterSection;
