import React, { useState } from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import "./items.css";
import Item from "./Item";

const Items = () => {
  const data = [
    {
      id: 1,
      name: "Item Name",
      price: 600,
    },
    {
      id: 2,
      name: "item 2",
      price: 500,
    },
  ];
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue((pre) => pre + 1);
  };
  const handleDecrement = () => {
    setValue((pre) => pre - 1);
  };
  const itemsList = data.map((dat) => (
    <Item
      key={dat.id}
      name={dat.name}
      price={dat.price}
      value={value}
      inc={handleIncrement}
      dec={handleDecrement}
    />
  ));
  return (
    <>
      <Navbar />
      <div className="items">
        <div className="itemcontainer">{itemsList}</div>
      </div>
    </>
  );
};

export default Items;
