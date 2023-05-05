import React from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import "./Category.css";

const Category = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="mainContainerTables">
          <div className="innerCategory">
            <div className="category">Category 1</div>
            <div className="category">Category 2</div>
            <div className="category">Category 3</div>
            <div className="category">Category 4</div>
            <div className="category">Category 1</div>
            <div className="category">Category 2</div>
            <div className="category">Category 3</div>
            <div className="category">Category 4</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
