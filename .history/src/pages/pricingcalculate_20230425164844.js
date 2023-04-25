import Footer2 from 'components/Footer2'
import Navbar from 'components/Navbar'
import PricingCalculator from 'components/PricingCalc'
import React from 'react'

export default function pricingcalculate() {
  return (
<>
<Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />
<div className="container">

    <PricingCalculator/>
</div>
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
</>
  )
}
