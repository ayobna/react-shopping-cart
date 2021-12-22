import React from "react";
import "../../css/Filter/Filter.css";
import Flip from "react-reveal/Flip";
function Filter(props) {
  return (
    <Flip left>
      <div className="filter-wrapper">
        <h2 className="filter-title"> Filter </h2>
        <div className="num-of-products"> Number of Products</div>
        <div className="filter-by-size" onChange={props.handleFilterBySize}>
          <span>Filter</span>
          <select defaultValue={props.category} className="filter-select">
            <option value="ALL">ALL</option>
            {props.Products.map((product, i) => (
              <option value={product.store_category_title} key={i}>
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
    </Flip>
  );
}

export default Filter;
