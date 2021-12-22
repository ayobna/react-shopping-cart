import React,{useState,useEffect} from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal";
import Modal from 'react-modal'
function Products(props) {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
      setProduct(product)
  }

  const closeModal = () => {
      setProduct(false)
  }

  return (
    <div className="products-wrapper">
      {props.Products
        ? props.Products.map((product) => (
            <div className="product-item" key={product.id}>
              <a href="#"onClick={()=>openModal(product)} >
                <img src={product.images[0].url} alt={product.title} />
              </a>
              <div className="product-desc">
                <p>{product.title}</p>
                <span>${product.price}</span>
              </div>
              <button onClick={()=>props.addToCart(product)}>
                {" "}
                Add To Cart{" "}
              </button>
              
            </div>
          ))
          

        : "loading.."}
       
        <ProductModal product={product} closeModal={closeModal} />
        
    </div>
  );
}
export default Products;
