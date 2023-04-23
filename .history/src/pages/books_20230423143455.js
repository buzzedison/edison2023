import React from "react";
import Meta from "components/Meta";
import Navbar4 from "components/Navbar4";
import HeroSection2 from "components/HeroSection2";
import HeroSection5 from "components/HeroSection5";
import HeroSection from "components/HeroSection";
import Footer3 from "components/Footer3";

function BooksPage(props) {
  return (
    <>
      <Meta title="Books" />
      <Navbar4
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Discover the Wisdom and Insights of a Author with Two Published Books and More on the Way"
        subtitle=" Edison is a leading expert in Business development, Brand Strategy and Digital Transformation. With two published books under their belt and more on the way, Edison is a valuable resource for those seeking wisdom and insights on how to succeed in the business world."
      />
      <HeroSection5
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Pricing Strategy to Help You Win in Business."
        subtitle="Learn how to build a pricing strategy that works.Learn different pricing models and strategies. Learn how to communicate your price to your customers. Understand the Psychology of your customer."
        image="https://buzzedison.com/wp-content/uploads/2023/01/edisonbook.webp"
        buttonText="GET THE BOOK"
        buttonColor="primary"
        buttonPath="https://www.amazon.com/Winning-Pricing-Strategy-ideal-market-ebook/dp/B09HMZCTXK/ref=sr_1_1?crid=HTWX27RDLGY&keywords=winning+pricing+strategy+by+edison+ade&qid=1673274678&sprefix=winning+pricing+strategy+by+edison+ad%2Caps%2C682&sr=8-1"
      />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Unlock Your Full Potential with the Productivity Playbook"
        subtitle="Are you tired of feeling overwhelmed and unable to accomplish your goals? It's time to take control of your productivity and start achieving real results. The Productivity Playbook is here to help."
        image="https://buzzedison.com/wp-content/uploads/2023/01/2-1.png"
        buttonText="GET THE BOOK"
        buttonColor="primary"
        buttonPath="https://www.amazon.com/Productivity-Overload-Edison-Ade-ebook/dp/B09QRTP162/ref=sr_1_1?keywords=productivity+overload+by+Edison+Ade&qid=1673274769&sr=8-1"
      />
      <Footer3
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

export default BooksPage;
