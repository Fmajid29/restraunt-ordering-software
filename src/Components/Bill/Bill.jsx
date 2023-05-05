import React, { useState } from "react";
import Cross from "../../Assets/Images/Cross.png";
import Navbar from "../Common Components/Navbar/Navbar";
import "./Bill.css";

const Bill = () => {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(786);

  const handleIncrement = () => {
    setValue(value + 1);
    setPrice(price + 786);
  };
  const handleDecrement = () => {
    setValue(value + -1);
    setPrice(price - 786);
  };
  const newValue = (price / 100) * 5;
  const taxValue = price + newValue;

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="mainContainerBill">
          <div className="innerBill">
            <div className="p-2">
              <div className="billStyle">
                <div>
                  <h className="headingBill"> ITEM NAME</h>
                </div>
                <div className="flex justify-between">
                  <div onClick={handleIncrement}>
                    <h className="decrement">+</h>
                  </div>
                  <div>
                    <h className="headingBill px-2">{value}</h>
                  </div>
                  <div onClick={handleDecrement}>
                    <h className="decrement">-</h>
                  </div>
                </div>
                <div>
                  <h className="headingBill">{price}</h>
                </div>
              </div>
            </div>
            <div>
              <img className="delImage" src={Cross} />
            </div>
            <div className="buttonContainerBill">
              <button className="buttonBill">Cancel Order</button>
            </div>
          </div>
          <div className="footerContainer">
            <div style={{ width: "30%" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <h className="headingBill">Total Bill:</h>
                </div>
                <div>
                  <h className="headingBill"> {price}</h>
                </div>
              </div>
              <div>
                <h className="headingBill">Tax5%</h>
              </div>
              <div>
                <h className="headingBill"> Total Bill:{taxValue}</h>
              </div>
            </div>
            <div className="footerButtons">
              <div className="dropDown">
                <select className="genreStyle2" name="counter" id="counter">
                  <option>Payment By</option>
                  <option>Cash</option>
                  <option>Card</option>
                  <option>Booty?</option>
                </select>
              </div>
              <div className="buttonContainerBill1">
                <button className="buttonBill1">Pay</button>
              </div>
              <div className="buttonContainerBill1">
                <button className="buttonBill1">Print & Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bill;
