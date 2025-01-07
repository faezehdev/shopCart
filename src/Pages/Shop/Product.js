import React, { useContext,useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { shopContext } from '../../context/shopContext';
export default function Product(props) {
    const { id , productName, productImage , price} = props.data
    const [cartItems , addToCart , removeFromCart] = useContext(shopContext)
   const isInCart = cartItems?.some((item)=> item.id === id)

  return (
   <>
       <Box component="div" className='product' sx={{
              display:'flex',
              flexDirection:'column',
               width:'100%'
             }}>
                <Box component="div" className='productIMG' sx={{
              display:'flex',
              justifyContent:'center',
               width:'100%',
               height:'300px'
             }}>
             <Box
              component="img"
              sx={{
                width: '100%',
                objectFit:'cover'
              }}
              alt={productName}
              src={productImage}/>
             </Box>

             <Box component="div" className='productTitle' sx={{
              display:'flex',
              justifyContent:'space-between',
               width:'100%',
               alignItems:'center'
             }}>
                <Box component="h2" sx={{fontSize:18,color:'black',fontWeight:400}}>
                {productName}
                </Box>
                <Box component="span" className='price' sx={{fontSize:18,color:'black',fontWeight:400}}>
                {price}
                </Box>
              </Box>

              <Box component="div" className='productBtns' sx={{
              display:'flex',
              justifyContent:'flex-start',
               width:'100%',
               alignItems:'center',
               gap:".8em"
             }}>
               <Button variant="contained" onClick={()=>addToCart(id)}
               sx={{backgroundColor:"rgb(118, 0, 228)",width:"30px",height:'30px'}}>+</Button>
               <Typography sx={{width:"30px",fontSize:16,textAlign:"center"}}>
                {cartItems?.filter(row=>row.id == id)[0]?.count  }
               </Typography>
               {isInCart &&        <Button variant="contained" onClick={()=>removeFromCart(id)}
                sx={{backgroundColor:"rgb(118, 0, 228)",width:"30px",height:'30px'}}>-</Button>}
     
                </Box>   
        
        </Box>
   </>
  )
}
