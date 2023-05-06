import React, { useState } from "react";
import Cross from "../../Assets/Images/Cross.png";
import "./Bill.css";

const BillItem = () => {
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
  return (
    <>
      <div className="billStyle">
        <h className="billitemname"> ITEM NAME </h>
        <div className="quantity">
          <button className="decrement" onClick={handleIncrement}>
            +
          </button>
          <h className="billitemvalue">{value}</h>
          <button className="decrement" onClick={handleDecrement}>
            -
          </button>
        </div>
        <h className="billitemvalue">{price}</h>
        <img className="delImage" src={Cross} alt="hi" />
      </div>
    </>
  );
};

export default BillItem;
