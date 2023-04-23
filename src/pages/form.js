import Navbar from "components/Navbar"


const { default: Subscribe } = require("components/Subscribe")

const Email =()=> {
    return (
        <>
    <Navbar
        color="default"
        logo="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.svg"
        logoInverted="https://buzzedison.com/wp-content/uploads/2023/03/website-logo.png"
      />
       <div className="container">
        <Subscribe/>
        </div> 
        </>
    )
}

export default Email