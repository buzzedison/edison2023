import React from "react";
import Meta from "components/Meta";
import HeroSection3 from "components/HeroSection3";
import { requireAuth } from "util/auth";


function DashboardPage(props) {
  return (
    <>
      <Meta title="Dashboard" />
      <HeroSection3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Features coming soon!"
        subtitle="I have something awesome coming soon."
        buttonText="Get Notified"
        buttonColor="primary"
        buttonPath="/pricing"
      />
    
    </>
  );
}

export default requireAuth(DashboardPage);
