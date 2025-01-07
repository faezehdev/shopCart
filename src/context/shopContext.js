import { createContext, useState } from "react";
export const shopContext = createContext()
export const ShopContextProvider = (props)=>{
   const [cartItems , setCartItems] = useState([])
   const addToCart = (proID)=>{
   
    if(cartItems?.find((item)=>{
        return item.id === proID
    })){
        console.log(proID);
        setCartItems(cartItems?.map((i)=>{
            if(i.id === proID){
           return {...i , count : i?.count + 1}
            }
            else return i
        }))
    }
    else{
        setCartItems([ ...cartItems,{ id:proID, count:1}])    
                 }
    


   }
   const removeFromCart = (proID)=>{
    if(cartItems?.find((pro)=>{
        return pro.id === proID
    })){
        setCartItems(cartItems.map((pro)=>{
            if(pro.id === proID){
                return {...pro , count :  pro.count=== 0 ? 0 : pro.count - 1}
            }
            else return pro
        }))
    }
    
   }
   const contextValues = [cartItems , addToCart , removeFromCart]
   return  <shopContext.Provider value={contextValues}> {props.children} </shopContext.Provider>
}
