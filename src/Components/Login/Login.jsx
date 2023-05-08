import React, { useEffect, useState } from "react";
import logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { postApiWithoutAuth } from "../../apiurl";
import { url } from "../../api";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    location: "",
    counter: "",
  });
  const navigate = useNavigate();

  const postData = async () => {
    const res = await postApiWithoutAuth(url.LOGIN_URL, {
      username: userData.username,
      password: userData.password,
    });
    if (res.success) {
      console.log("logged in");
    } else {
      console.log("login error");
    }
  };

  useEffect(() => {
    // axios
    //   .get("http://127.0.0.1:5500/api/employes", {
    //     headers: {
    //       "x-access-token":
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQWRtaW4iLCJpYXQiOjE2ODM1MzI4MjAsImV4cCI6MTY4MzYxOTIyMH0.diuZ0FiKBV3ONrgsWKDIGQP9fddH3FSzcQ4jR6r2KIQ",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.json());
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // fetch("http://127.0.0.1:5500/api/employes", {
    //   headers: {
    //     "x-access-token":
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQWRtaW4iLCJpYXQiOjE2ODM1MzI4MjAsImV4cCI6MTY4MzYxOTIyMH0.diuZ0FiKBV3ONrgsWKDIGQP9fddH3FSzcQ4jR6r2KIQ",
    //   },
    // })
    //   .then((response) => {
    //     console.log(response.json());
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClick = () => {
    navigate("/tables");
  };

  return (
    <div className="mainContainer">
      <div className="subMainContainer">
        <img className="loginlogo" src={logo} alt="loginLogo" />
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
          onChange={handleOnChange}
        />
      </div>
      <span className="lableStyleDropdown">Counter:</span>
      <div className="dropDown">
        <select
          className="genreStyle"
          name="counter"
          id="counter"
          onChange={handleOnChange}
        >
          <option value="Alabama.">Counter</option>
          <option value="Alaska.">Alaska</option>
          <option value="California.">California</option>
          <option value="Colorado">Colorado</option>
        </select>
      </div>
      <span className="lableStyleDropdown">Location:</span>
      <div className="dropDown">
        <select
          className="genreStyle"
          name="location"
          id="location"
          onChange={handleOnChange}
        >
          <option value="Alabama.">Location</option>
          <option value="Alaska.">Alaska</option>
          <option value="California.">California</option>
          <option value="Colorado">Colorado</option>
        </select>
      </div>
      <div className="buttonContainer">
        <button className="loginButton" onClick={postData}>
          LOG IN
        </button>
      </div>
    </div>
  );
};
export default Login;
