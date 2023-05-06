import React from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import "./Category.css";

const Category = () => {

  const categories = ['Category'];

function CategoryList() {
  return (
    <div>
      {categories.map(category => (
     <div className="mainContainerTables">
     <div className="innerCategory">
     <div className="category">{categories[0]}</div>
     <div className="category">{categories[0]}</div>
     <div className="category">{categories[0]}</div>
     <div className="category">{categories[0]}</div>
     <div className="category">{categories[0]}</div>
     <div className="category">{categories[0]}</div>
     <div className="category">{categories[0]}</div>
     <div className="category">{categories[0]}</div>
     
     </div>
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
      <div>
      <CategoryList />
      </div>
     
    </>
  );
};
export default Category;
