import React from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import "./Tables.css";
import Table from "./Table";

const Tables = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="tables">
          <Table tableState={"serving"} tableNumber="1" />
          <Table tableState={"empty"} tableNumber="2" />
          <Table tableState={"paying"} tableNumber="3" />
          <Table tableState={"serving"} tableNumber="4" />
          <Table tableState={"empty"} tableNumber="5" />
          <Table tableState={"serving"} tableNumber="6" />
        </div>
      </div>
    </>
  );
};

export default Tables;
