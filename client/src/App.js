import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { words } from "./words";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import {Provider} from 'react-redux'
import store from "./store/store";
function App() {
  const [products, setproducts] = useState(data);
  const [sort, setsort] = useState("");
  const [category, setcategory] = useState("");
  const [cartItems, setcartItems] =useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  const handleFilterBySize = (e) => {
    setcategory(e.target.value);

    var newProduct = data.filter(
      (p) => p.store_category_title === e.target.value
    );
    setproducts(newProduct);
    if (e.target.value == "ALL") {
      setproducts(data);
    }
  };


  
  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
        console.log(`cartItemsClone`, cartItemsClone);
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setcartItems(cartItemsClone);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setcartItems(cartItemsClone.filter((p) => p.id !== product.id));
  };

  const handleFilterByorder = (e) => {
    console.log(e.target.value);
  };
  return (
   <Provider store={store} > 
      <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products Products={products} addToCart={addToCart} />
          <Filter
            Products={data}
            category={category}
            handleFilterByorder={handleFilterByorder}
            handleFilterBySize={handleFilterBySize}
          />
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
   </Provider>
  );
}

export default App;
