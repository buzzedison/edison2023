import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import HeroSection2 from "components/HeroSection2";
import TeamBiosSection from "components/TeamBiosSection";
import NewsletterSection from "components/NewsletterSection";
import Footer2 from "components/Footer2";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2022/04/BUZZEDISON-NEW-LOGO.png"
        logoInverted="https://buzzedison.com/wp-content/uploads/2022/04/BUZZEDISON-NEW-LOGO.png"
      />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Start, Scale and Profit from Your Business"
        subtitle="This is a 12-week program that will help you start, scale and profit from your business using a systematic approach that focuses on five key areas: strategy,
         marketing, operations, finance and innovation. "
        image="https://buzzedison.com/wp-content/uploads/2023/01/1.png"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Committment to Grow your business"
        subtitle="Starting a business can be a daunting task, but with my guidance, you'll have the tools and support you need to achieve your goals. Whether you're just starting out or looking to take your business to the next level, I can help you develop a customized plan to help you reach your goals."
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
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
        buttonPath="/pricing"
      />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Stay up-to-date on the latest trends in business, technology, fitness, and wellness with my monthly newsletter. Each month, I provide readers with fresh insights and research on a variety of topics related to business, work, and productivity, as well as tips for living a well-rounded life"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed! Can't wait to meet you"
      />
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
