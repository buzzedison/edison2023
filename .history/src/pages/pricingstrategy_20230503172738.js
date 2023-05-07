import PricingMain from 'components/PricingHero'
import React from 'react'
import Navbar from 'components/Navbar';
import Footer2 from "components/Footer2";
import PricingCards from 'components/PricingCard';
import PricingCTA from 'components/PricingCta';
import PricingResources from 'components/PricingTool';
import PricingResourcesTitle from 'components/PricingToolTitle';
function pricingstrategy() {
  return (
    <div>
   <Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />

        <PricingMain/>
        <PricingCards/>
        <PricingCTA/>
        <PricingResourcesTitle/>
        <PricingResources/>
        <Footer2
// bgColor="primary"
size="medium"
bgImage=""
bgImageOpacity={1}
description=""
copyright={`© ${new Date().getFullYear()} Buzzedison`}
logo="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
logoInverted="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
sticky={true}
/>
    </div>
  )
}

export default pricingstrategy