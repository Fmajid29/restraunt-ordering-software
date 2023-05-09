import React, { useEffect, useState } from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import { getApiWithAuth } from "../../apiurl";
import { url } from "../../api";
import "./items.css";
import Item from "./Item";

const Items = () => {
  const [Itemdata, setItemData] = useState([]);

  const getData = async () => {
    const res = await getApiWithAuth(url.ITEM_URL);
    if (res.success) {
      setItemData(res.data.items);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue((pre) => pre + 1);
  };
  const handleDecrement = () => {
    setValue((pre) => pre - 1);
  };
  const itemsList = Itemdata.map((dat) => (
    <Item
      key={dat.mID}
      name={dat.ItmName}
      price={dat.Price}
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
