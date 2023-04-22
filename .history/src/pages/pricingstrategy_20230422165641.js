import PricingMain from 'components/PricingHero'
import React from 'react'
import Navbar from 'components/Navbar';
import Footer2 from "components/Footer2";
import PricingCards from 'components/PricingCard';
function pricingstrategy() {
  return (
    <div>
        <Navbar/>

        <PricingMain/>
        <PricingCards/>
        <Footer2/>
    </div>
  )
}

export default pricingstrategy