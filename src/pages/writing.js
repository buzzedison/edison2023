import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import HeroSection3 from "components/HeroSection3";
import HeroSection4 from "components/HeroSection4";
import HeroSection from "components/HeroSection";
import Footer from "components/Footer";

function WritingPage(props) {
  return (
    <>
      <Meta title="Writing" />
      <Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2022/04/BUZZEDISON-NEW-LOGO.png"
        logoInverted="https://buzzedison.com/wp-content/uploads/2022/04/BUZZEDISON-NEW-LOGO.png"
      />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title=" I write to make the world a better place one story, book, article at a time"
        subtitle="I have always had a passion for writing, and it is my goal to share that passion with others through my work. I believe that the written word has the power to inspire, educate, and entertain, and it is my hope that my writing will do just that."
        buttonText="MY BLOG"
        buttonColor="primary"
        buttonPath="https://www.buzzedison.com"
      />
      <HeroSection4
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="I explore the intersection of business, leadership, and technolog"
        subtitle="I explore the intersection of business, leadership, and technology through engaging articles and thought-provoking poetry. From in-depth analyses of the latest industry trends to candid reviews of the latest blockbuster films, my writing covers a wide range of topics that are sure to captivate and inspire. So why wait? Click the go to medium button and join me on a journey of self-discovery, personal growth, and intellectual curiosity. See you on the other side!."
        image="https://buzzedison.com/wp-content/uploads/2023/01/medium.png"
        buttonText="GO TO MEDIUM"
        buttonColor="primary"
        buttonPath="https://medium.com/@buzzedison"
      />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Heartwarming stories and thought-provoking poetry, to movie reviews"
        subtitle="On my Vocal Media page, you'll find a collection of my most entertaining and engaging writing. From heartwarming stories and thought-provoking poetry, to movie reviews and fitness tips, I cover a wide range of topics that are sure to capture your attention. So come on in and take a look around! Whether you're here to be entertained, inspired, or just to pass the time, I'm confident you'll find something you love. Thanks for stopping by, and I hope to see you again soon!"
        image="https://buzzedison.com/wp-content/uploads/2023/01/vocal2-jpeg.webp"
        buttonText="GO TO VOCAL MEDIA"
        buttonColor="primary"
        buttonPath="https://medium.com/@buzzedison"
      />
      <Footer
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

export default WritingPage;
