import React from "react";

const Item = (props) => {
  return (
    <>
      <div className="itemCard">
        <h1>{props.name}</h1>
        <div className="random">
          <h2>${props.price}</h2>
          <div className="inc">
            <div onClick={props.inc}>
              <h className="decrement">+</h>
            </div>
            <div>
              <h className="headingBill">{props.value}</h>
            </div>
            <div onClick={props.dec}>
              <h className="decrement">-</h>
            </div>
          </div>
        </div>
        <button>add</button>
      </div>
    </>
  );
};

export default Item;
