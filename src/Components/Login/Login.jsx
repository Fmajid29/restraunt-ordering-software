import React,{useState} from "react";
import logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {

    const navigate=useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        location:"",
        counter:"",

      });

      const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value })
      };

    const handleClick=()=>
    {
        navigate("/dashboard")
    }

  return (
    <div className="mainContainer">
      <div className="subMainContainer">
        <img className="loginlogo" src={logo} />
      </div>
      <div className="emailInput">
        <span className="lableStyle">Username:</span>
        <input
          className="loginInput"
          placeholder="Enter your Username"
          type="text"
          id="username"
          name="username"
          onChange={handleOnChange}
        />
      </div>
      <div className="emailInput">
        <span className="lableStyle">Password:</span>
        <input
          className="loginInput"
          placeholder="Enter your Password"
          type="password"
          id="password"
          name="password"
        />
      </div>
      <span className="lableStyleDropdown">Counter:</span>
      <div className="dropDown">
        <select className="genreStyle" name="counter" id="counter" onChange={handleOnChange}>
          <option value="Alabama.">Counter</option>
          <option value="Alaska.">Alaska</option>
          <option value="California.">California</option>
          <option value="Colorado">Colorado</option>
        </select>
      </div>
      <span className="lableStyleDropdown">Location:</span>
      <div className="dropDown">
        <select className="genreStyle" name="location" id="location" onChange={handleOnChange}>
          <option value="Alabama.">Location</option>
          <option value="Alaska.">Alaska</option>
          <option value="California.">California</option>
          <option value="Colorado">Colorado</option>
        </select>
      </div>
      <div className="buttonContainer">
        <button className="loginButton" onClick={handleClick} >LOG IN</button>
      </div>
    </div>
  );
};
export default Login;
