import Navbar from 'components/Navbar'
import PricingCalculator from 'components/PricingCalc'
import React from 'react'

export default function pricingcalculate() {
  return (
<>

<div className="container">
<Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />
    <PricingCalculator/>
</div>
</>
  )
}
