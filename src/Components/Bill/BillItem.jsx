import React from "react";
import Cross from "../../Assets/Images/Cross.png";
import "./Bill.css";

const BillItem = (props) => {
  return (
    <>
      <div className="billStyle">
        <h className="billitemname"> {props.name} </h>
        <div className="quantity">
          <button className="decrement" onClick={props.inc}>
            +
          </button>
          <h className="billitemvalue">{props.value}</h>
          <button className="decrement" onClick={props.dec}>
            -
          </button>
        </div>
        <h className="billitemvalue">{props.price}</h>
        <img className="delImage" src={Cross} alt="hi" />
      </div>
    </>
  );
};

export default BillItem;
