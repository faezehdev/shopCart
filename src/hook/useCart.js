
// import { useState , useEffect } from 'react'
import { useState } from "react";
import { useEffect } from "react";
export default function useCart() {
   const getStorageData = JSON.parse(localStorage.getItem('cartItems'))
    const [cartItems , setCartItems] = useState(getStorageData || [])
    useEffect(() => {
     const savedItem = localStorage.getItem("cartItems");
     localStorage.setItem('cartItems',JSON.stringify(cartItems))
 
   }, [cartItems]);
   
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
   const ResetCart = ()=>{
       console.log('delete');
       setCartItems([])
       localStorage.removeItem("cartItems")
       
   }
   return {cartItems , addToCart , removeFromCart , ResetCart}
}
