import React from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import "./Category.css";

const Category = () => {

  const categories = [
    {  category: "John" },
    {  category: "Jane" },
    {  category: "Bob" },
    {  category: "John" },
    {  category: "Jane" },
    {  category: "Bob" },
    {  category: "Bob" },
  ];

function CategoryList() {
  return (
    <div className="categoryOut">
      {categories.map(category => (
     <div className="category">
     <h1 className="headingCat">
      {categories.category}
     </h1>
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
