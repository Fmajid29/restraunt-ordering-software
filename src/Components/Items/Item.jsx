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
              <h1 className="decrement">+</h1>
            </div>
            <div>
              <h1 className="itemBill">{props.value}</h1>
            </div>
            <div onClick={props.dec}>
              <h1 className="decrement">-</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
