import React, { useState } from "react";
import "./table.css";
import { useNavigate } from "react-router";

const Table = (props) => {
  const navigate = useNavigate();
  const [tableState, settablestate] = useState(props.tableState);

  function handleClick() {
    settablestate("serving");
    console.log(tableState);
    navigate("/category");
  }

  return (
    <div className={"tablecircle " + tableState} onClick={handleClick}>
      {props.tableNumber}
    </div>
  );
};

export default Table;
