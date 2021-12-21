import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { words } from "./words";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
function App() {
  const [products, setproducts] = useState(data);
  const [sort, setsort] = useState("")
  const [category, setcategory] = useState("")

  const handleFilterBySize=(e)=>{
    setcategory(e.target.value)
  

    let newProduct =data.filter(p=>p.store_category_title===e.target.value)
    setproducts(newProduct)
    if(e.target.value == "ALL") {
      setproducts(data)
    }
  
  }

  const handleFilterByorder =(e) => {
    console.log(e.target.value)
  }
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products Products={products} />
         <Filter  Products={data} category={category} 
         handleFilterByorder={handleFilterByorder}
         handleFilterBySize={handleFilterBySize}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
