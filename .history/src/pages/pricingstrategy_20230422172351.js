import PricingMain from 'components/PricingHero'
import React from 'react'
import Navbar from 'components/Navbar';
import Footer2 from "components/Footer2";
import PricingCards from 'components/PricingCard';
import PricingCTA from 'components/PricingCta';
function pricingstrategy() {
  return (
    <div>
        <Navbar/>

        <PricingMain/>
        <PricingCards/>
        <PricingCTA/>
        <Footer2
bgColor="primary"
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