import React, { useState } from "react";

import Navbar from "../Common Components/Navbar/Navbar";
import "./Bill.css";
import BillItem from "./BillItem";

const Bill = () => {
  const [data, setData] = useState([
    { id: 0, name: "Item 1", price: 10, quantity: 0 },
    { id: 1, name: "Item 2", price: 20, quantity: 0 },
    { id: 2, name: "Item 3", price: 30, quantity: 0 },
  ]);

  const [price, setPrice] = useState(0);
  const newValue = (price / 100) * 5;
  const taxValue = price + newValue;

  const incrementQuantity = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
    setPrice((pre) => pre + data[id].price);
  };
  const handleDecrement = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
    setPrice((pre) => pre + data[id].price);
  };

  const billItemList = data.map((dat) => (
    <BillItem
      key={dat.id}
      id={dat.id}
      name={dat.name}
      value={dat.quantity}
      price={dat.price}
      inc={incrementQuantity}
      dec={handleDecrement}
    />
  ));

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="mainContainerBill">
          <div className="innerBill">
            <div className="billitemlist">{billItemList}</div>
            <div className="buttonContainerBill">
              <button className="buttonBill">Cancel Order</button>
            </div>
          </div>
          <div className="footerContainer">
            <div className="footerHeadings">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <h1 className="headingBill">Total Bill:</h1>
                </div>
                <div>
                  <h1 className="headingBill"> {price}</h1>
                </div>
              </div>
              <div>
                <h1 className="headingBill">Vat 5%</h1>
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
