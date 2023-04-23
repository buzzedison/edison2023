import React from "react";
import Meta from "components/Meta";
import Navbar3 from "components/Navbar3";
import HeroSection3 from "components/HeroSection3";
import HeroSection6 from "components/HeroSection6";
import HeroSection from "components/HeroSection";

function CoachingPage(props) {
  return (
    <>
      <Meta title="Coaching" />
      <Navbar3
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="The Business Development Bridge"
        subtitle="Helping people and businesses win everyday.  I work with clients to develop clear, actionable business development strategies that are tailored to your goals and budget. My goal is to be the bridge between your ideas and the market—helping you grow your business by matching those ideas with the right customers and opportunities."
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <HeroSection6
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Business Development, Business Strategy Coaching "
        subtitle="I offer business development, business strategy coaching, and strategic planning services to help businesses grow.I am here to help you clarify your vision, set attainable goals, and develop a clear plan of action to achieve success. With my guidance, you will be able to confidently navigate the complex world of business and emerge as a leader in your industry. But I'm not just here to give you advice. I am a partner in your journey, dedicated to supporting you every step of the way. Together, we will overcome any challenges and celebrate your victories."
        image="https://buzzedison.com/wp-content/uploads/2023/01/The-Art-of-Strategy-.svg"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Marketing Strategy Consulting "
        subtitle="We’ve all heard the saying: “The only constant is change.” But how do you stay ahead of the curve when it comes to the ever-changing landscape of marketing? With no time to waste, this service results in profitable and actionable steps to achieve growth in your business and brand building. 90 days to dramatically increase your KPI’s, leads, and sales and put your business in a position of dominance"
        image="https://buzzedison.com/wp-content/uploads/2022/02/shape-123213.png"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
    </>
  );
}

export default CoachingPage;
