import Navbar from 'components/Navbar';
import Footer2 from "components/Footer2";
import PricingResources from 'components/PricingTool';
const Worksheet =()=>{
    return (
        <>
      
        <Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />
        <div className="container">
            <div className="w-1/2">
<h2 className="text-center text-3xl text-primary">
                Thank you for buying my book. </h2>
                
            </div>

<PricingResources/>
</div>
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


        </>
    )

}

export default Worksheet;