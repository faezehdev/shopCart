
import useCart from "../hook/useCart";
import { createContext } from "react";

export const ShopContext2 = createContext({
    cartItems:null,
    addToCart:()=>{},
    removeFromCart:()=>{},
})
export const ShopContextProvider2 =(props)=>{
   return  <ShopContext2.Provider value={useCart()} >{props.children}</ShopContext2.Provider>
}