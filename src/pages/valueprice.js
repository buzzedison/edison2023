import ValueBasedPricing from 'components/ValuePricing'
import React from 'react'
import Navbar from 'components/Navbar'
import Footer2 from 'components/Footer2'
function valueprice() {
  return (


<>
<Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />
<div className="container">
    <ValueBasedPricing/>
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

export default valueprice