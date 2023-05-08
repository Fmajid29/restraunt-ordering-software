import React from "react";
import { useNavigate } from "react-router-dom";
import Bill from "../../Bill/Bill";
import logo from "../../../Assets/Images/logo.png";
import { deleteToken } from "../../../localStorage";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/tables");
  };
  const handleClick2 = () => {
    navigate("/bill");
  };
  const Logout = () => {
    deleteToken();
    navigate("/");
  };
  return (
    <>
      <div className="mainContainerNavbar">
        <div className="imageContainerNavbar">
          <img className="logoNavbar" src={logo} alt="hi" />
        </div>
        <div className="navbarOuter">
          <div onClick={handleClick} className="navbarContent">
            TABLES
          </div>
          <div className="navbarContent" onClick={handleClick2}>
            ORDERS
          </div>
          <div className="navbarContent" onClick={Logout}>
            LOGOUT{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
