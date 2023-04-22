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
        <Footer2/>
    </div>
  )
}

export default pricingstrategy