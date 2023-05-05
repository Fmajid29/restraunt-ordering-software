import React from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import "./items.css";
import Item from "./Item";

const Items = () => {
  return (
    <>
      <Navbar />
      <div className="items">
        <div className="itemcontainer">
          <Item />
        </div>
      </div>
    </>
  );
};

export default Items;
