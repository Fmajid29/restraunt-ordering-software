import React, { useState } from "react";

const Item = (props) => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value + -1);
  };
  return (
    <>
      <div className="itemCard">
        <h1>Item Name</h1>
        <div className="random">
          <h2>${props.price}</h2>
          <div className="inc">
            <div onClick={handleIncrement}>
              <h className="decrement">+</h>
            </div>
            <div>
              <h className="headingBill">{value}</h>
            </div>
            <div onClick={handleDecrement}>
              <h className="decrement">-</h>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
