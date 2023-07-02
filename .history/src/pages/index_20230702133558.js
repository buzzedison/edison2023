import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import HeroSection2 from "components/HeroSection2";
// import TeamBiosSection from "components/TeamBiosSection";
// import NewsletterSection from "components/NewsletterSection";
import Footer2 from "components/Footer2";
import Box from "@mui/material/Box";
// import Slide from "@mui/material/Slide";
import Subscribe from "components/Subscribe";
import Head from "next/head";
import BookPromo from "components/BookPromotion";
import Services from "components/DoForYou";



function IndexPage(props) {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
    <Head>
      <title>Home | Buzzedison</title>
      <meta name="description" content="Buzzedison is a business and brand strategy firm that helps entrepreneurs and business owners start, scale and profit from their business." />
      </Head>
      <Meta />
      <Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />
     
      <Box mt={-5}>
        {/* <Slide in={checked} direction="up" timeout={1000}>
        <div>
            <HeroSection2
              bgColor="default"
              size="medium"
              bgImage=""
              bgImageOpacity={1}
              title="Page-Turning Profits: Unleash Your Business Potential"
              subtitle="Unlock the ultimate business growth playbook with our transformative book collection. Delve into ingenious pricing strategies, productivity hacks, masterful marketing techniques, and much more. Empower your entrepreneurial journey and turn the page to a prosperous future!"
            />
          </div>
        </Slide> */}
      </Box>
      <BookPromo/>
      <Services/>
      {/* <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      /> */}
      <Box mt={-5}>
        <HeroSection
          bgColor="default"
          size="normal"
          bgImage=""
          bgImageOpacity={1}
          title="Hey there, I'm Edison."
          subtitle=" If you're feeling stuck or overwhelmed, don't worry, I've got your back. I've had my fair share of failures in business, but I've turned those setbacks into some major wins. Now, I'm excited to join forces with you and make a positive impact on your business, your life, and the world. Let's do this!"
          image="https://buzzedison.com/wp-content/uploads/2023/01/2.png"
          buttonText="Get Started"
          buttonColor="primary"
          buttonPath="/blueprint"
        />
      </Box>
      {/* <NewsletterSection
        bgColor="default"
        size="medium"
        bg Image=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Stay up-to-date on the latest trends in business, technology, fitness, and wellness with my monthly newsletter. Each month, I provide readers with fresh insights and research on a variety of topics related to business, work, and productivity, as well as tips for living a well-rounded life"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed! Can't wait to meet you"
        /> */}
        <Subscribe/>
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

export default IndexPage;
