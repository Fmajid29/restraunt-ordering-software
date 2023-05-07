import React from "react";
import Cross from "../../Assets/Images/Cross.png";
import "./Bill.css";

const BillItem = (props) => {
  return (
    <>
      <div className="billStyle">
        <h1 className="billitemname"> {props.name} </h1>
        <div className="quantity">
          <button className="decrement" onClick={() => props.inc(props.id)}>
            +
          </button>
          <h1 className="billitemvalue">{props.value}</h1>
          <button className="decrement" onClick={() => props.dec(props.id)}>
            -
          </button>
        </div>
        <h1 className="billitemvalue">${props.price}</h1>
        <img className="delImage" src={Cross} alt="hi" />
      </div>
    </>
  );
};

export default BillItem;
