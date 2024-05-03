import React from "react";
import '../SearchBar.css';
import NavBar_ForCart  from "./NavBar-Cart";

export const Cart = () =>{
  
    return(
      <div className="shopping-cart">

            <NavBar_ForCart/>
            <div className="titles">
              <h1 className="product-titel">Product</h1>
              <h1 className="price">price</h1>
              <h1 className="quantity">Quantity</h1>
              <h1 className="total">Total</h1>
            </div>
      </div>  

    )
}