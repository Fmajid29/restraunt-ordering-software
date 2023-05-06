import React, { useState } from "react";

import Navbar from "../Common Components/Navbar/Navbar";
import "./Bill.css";
import BillItem from "./BillItem";

const Bill = () => {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(786);

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
            <div className="billitemlist">
              <BillItem />
              <BillItem />
              <BillItem />
            </div>
            <div className="buttonContainerBill">
              <button className="buttonBill">Cancel Order</button>
            </div>
          </div>
          <div className="footerContainer">
            <div className="footerHeadings">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <h className="headingBill">Total Bill:</h>
                </div>
                <div>
                  <h className="headingBill"> {price}</h>
                </div>
              </div>
              <div>
                <h className="headingBill">Vat 5%</h>
              </div>
              <div>
                <h className="headingBill"> Total Bill: {taxValue}</h>
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
