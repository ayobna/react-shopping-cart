import React from "react";
import "../../css/Products/Products.css";
function Products(props) {
  console.log("products", props.Products);
  return (
    <div className="products-wrapper">
      {props.Products
        ? props.Products.map((product) => (
            <div className="product-item" key={product.id}>
              <a href="#" >
                <img src={product.images[0].url} alt={product.title} />
              </a>
              <div className="product-desc">
                <p>{product.title}</p>
                <span>${product.price}</span>
              </div>
              <button>
                {" "}
                Add To Cart{" "}
              </button>
            </div>
          ))
        : "loading.."}
    </div>
  );
}
export default Products;
