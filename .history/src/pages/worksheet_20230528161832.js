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
            <div className="">
<h2 className="text-center text-3xl text-primary">
                Thank you for buying my book. </h2>
                <p>
                    You are here because 
                    you got one of my books. 
                    I update resources here every month as 
                    my way to say thank you for your patronage. 
                </p>
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