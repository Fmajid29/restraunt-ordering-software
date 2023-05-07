import React from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import "./Category.css";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const categories = [
    { category: "John" },
    { category: "Jane" },
    { category: "Bob" },
    { category: "John" },
    { category: "Jane" },
    { category: "Bob" },
    { category: "Bob" },
  ];
  function handleClick() {
    navigate("/items");
  }
  function CategoryList() {
    return (
      <div className="categoryOut">
        {categories.map((cat) => (
          <div className="category" onClick={handleClick}>
            <h1 className="headingCat">{cat.category}</h1>
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mainContainerTables">
        <div className="innerCategory">
          <CategoryList />
        </div>
      </div>
    </>
  );
};
export default Category;
