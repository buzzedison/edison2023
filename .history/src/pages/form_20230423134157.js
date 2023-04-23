import Navbar from "components/Navbar"


const { default: Subscribe } = require("components/Subscribe")

const Email =()=> {
    return (
        <>
        <Navbar/>
       <div className="container">
        <Subscribe/>
        </div> 
        </>
    )
}

export default Email