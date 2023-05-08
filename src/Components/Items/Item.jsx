import React,{useState} from "react";

const Item = (props) => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue((pre) => pre + 1);
  };
  const handleDecrement = () => {
    setValue((pre) => pre - 1);
  };
  return (
    <>
      <div className="itemCard">
        <h1>{props.name}</h1>
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
        <button>add</button>
      </div>
    </>
  );
};

export default Item;
