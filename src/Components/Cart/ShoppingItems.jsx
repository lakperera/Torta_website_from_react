import React from "react"
import NavBar_Cart from "./NavBar_Cart";
import { CartState } from "./context/Context";

const ShoppingItems = () => {
  const {
    state :{products}
  }=CartState();
  console.log(state);
  return(
    <div className="ShoppingItems">
        <p>
          <NavBar_Cart/>
          
          </p>
    </div>
  )
}

export default ShoppingItems;