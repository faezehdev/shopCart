
import Box from '@mui/material/Box';
import Product from '../Shop/Product';
// import { shopContext } from '../../context/shopContext';
import Button from '@mui/material/Button';
import { ShopContext2 } from '../../context/ShopContext2';
import React, { useContext } from 'react'
import { PRODUCTS } from '../../data/product';
export default function Cart() {
   const {cartItems , ResetCart} = useContext(ShopContext2)
   console.log(cartItems);
   
  return (
    <>
    <Box component="h1" sx={{
      margin:'1em auto',
      width:'max-content'
    }}>
     Your Cart
    </Box>

    <Box component="div" className='productContainer' sx={{
      margin:'1em auto',
      width:'90%',
      display:'grid',
      gridTemplateColumns:'repeat(4,1fr)',
      gap:'3em'
    }}>
       {PRODUCTS.map((pro)=>{
            if(cartItems?.some((item)=> item.id === pro.id && item.count > 0)){
                return  <Product key={pro.id}  data={pro}></Product>
           } }
       )}
       
        
    </Box>
    <Button variant="contained" onClick={ResetCart}
               sx={{backgroundColor:"rgb(118, 0, 228)",width:"max-content",height:'50px',margin:'2em auto'}}>reset Cart</Button>
    </>
  )
}
