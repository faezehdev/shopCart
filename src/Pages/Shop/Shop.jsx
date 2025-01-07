import React from 'react'
import Box from '@mui/material/Box';
import Product from './Product'
import { PRODUCTS } from '../../data/product';

export default function Shop() {
  return (
    <>
    <Box component="h1" sx={{
      margin:'1em auto',
      width:'max-content'
    }}>
     Shop
    </Box>
    <Box component="div" className='productContainer' sx={{
      margin:'1em auto',
      width:'90%',
      display:'grid',
      gridTemplateColumns:'repeat(4,1fr)',
      gap:'3em'
    }}>
       {PRODUCTS.map(pro=>(
         <Product key={pro.id} data={pro}></Product>
       ))}
       
        
    </Box>
    </>
  )
}
