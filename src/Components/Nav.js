import React, { useContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { BrowserRouter as Router , Routes , Route,Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import {ShopContext2} from '../context/ShopContext2'
export default function Nav() {
  const {cartItems} = useContext(ShopContext2)
    
    let itemCount =0
     cartItems.forEach(a=>{
     
      itemCount += a.count
    })
    console.log(itemCount);
    const headerLeftStyle={
        width: "100%",
        display:" flex",
        flexDirection:'row',
        justifyContent: "flex-end",
        backgroundColor: "rgb(186, 126, 241)",
       padding:"1em 0 ",
        maxWidth:'unset !important',
        paddingRight:'2em',
        gap:'1em'
    }
    const headerRightStyle={
        width: "100%",
        display:" flex",
        flexDirection:'row',
        justifyContent: "flex-start",
        backgroundColor: "rgb(186, 126, 241)",
       padding:"1em 0 ",
        paddingLeft:'2em',
        maxWidth:'unset !important',
         gap:'2em'
    }
  return (
    <React.Fragment>
    <CssBaseline />
    <Container className='header' sx={{
        width:"100%",
        margin:"0 auto",
        maxWidth:'unset !important',
        padding:" 0 !important",
        display:'flex',
        }}>

      <Box sx={headerRightStyle} className="Right" >
      <h1 className='logo'>
         Faezeh
       </h1>
       <Box component="span" className='ShopIcon' >
       <Link to="/cart">
       <FaShoppingBag /> 
<span className="countt">
  {itemCount}
</span>
       </Link>
    </Box>
      </Box>
      <Box sx={headerLeftStyle} className="Left" >
      <Link to="/shopCart/">Shop</Link>
      {/* <Link to="/cart">Cart</Link> */}
      {/* <Link>AboutUs</Link> */}
      </Box>
    </Container>
  </React.Fragment>
  
  )
}
