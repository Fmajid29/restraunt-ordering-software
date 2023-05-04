import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png"
import Tables from "../../Tables/Tables";
import "./Navbar.css"

const Navbar=()=>
{

    const navigate=useNavigate()
    const handleClick=()=>
    {
            navigate("/tables")
    }


    return(
        <>
        <div className="mainContainerNavbar">
        <div className="imageContainerNavbar">
            <img className="logoNavbar" src={logo} />
        </div>
        <div className="navbarOuter">
            <div onClick={handleClick} className="navbarContent">TABLES</div>
            <div className="navbarContent"> ORDERS</div>
            <div className="navbarContent"> LOGOUT  </div>
        </div>
        </div>
        </>
    )
}
export default Navbar;