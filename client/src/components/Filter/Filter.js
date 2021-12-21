import React from "react";
import "../../css/Filter/Filter.css";
function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title"> Filter </h2>
      <div className="num-of-products"> Number of Products </div>
      <div className="filter-by-size" onChange={props.handleFilterBySize}>
        <span>Filter</span>
        <select value={props.category} className="filter-select">
        <option value="ALL">
            ALL
            </option>  
          {props.Products.map((product) => (
            <option value={product.store_category_title}>
              {product.store_category_title}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="filter-select">
          <option value="latest">Latest</option>
          <option value="lowest">lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
