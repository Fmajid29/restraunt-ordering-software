import React, { useState, useEffect } from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import { getApiWithAuth } from "../../apiurl";
import { url } from "../../api";
import Table from "./Table";
import "./Tables.css";

const Tables = () => {
  const [tableData, setTableData] = useState([{}]);

  const getData = async () => {
    const res = await getApiWithAuth(url.TABLE_URL);
    console.log("ahad", res.data.tables);
    if (res.success) {
      setTableData(res.data.tables);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const tableList = tableData.map((data) => (
    <Table tableState={"serving"} tableNumber={data.TableNo} />
  ));
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="tables">{tableList}</div>
      </div>
    </>
  );
};

export default Tables;
