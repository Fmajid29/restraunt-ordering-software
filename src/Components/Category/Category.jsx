import React from "react";
import Navbar from "../Common Components/Navbar/Navbar";
import "./Category.css";

const Category=()=>
{
    return(
        <>
        <div>
        <Navbar />
       </div>
       <div>
        <div className="mainContainerTables">
            <div className="innerCategory">
          <div className="innerTable" >
          <div className="categoryStart">Category 1</div>
          <div className="categoryStart" >Category 2 </div>
          <div  className="categoryStart" >Category 3 </div>
          <div  className="categoryStart"> Category 4</div>
          </div>
          <div className="innerTable" >
          <div className="categoryStart">Category 1</div>
          <div className="categoryStart" >Category 2 </div>
          <div  className="categoryStart" >Category 3 </div>
          <div  className="categoryStart"> Category 4</div>
          </div>
          </div>
          
        </div>
       </div>
       </>
    )
}
export default Category;