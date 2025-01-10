import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../data/product';
import Product from '../Shop/Product';
export default function ProductPage() {
    const proID = useParams()
    console.log(proID.id);
  return (
    <div className='proShow' style={{display:'flex',flexDirection:'column'}}>
        {PRODUCTS.map((p)=>{
          if (p.id == proID.id ){
            return (
                <>
                <h1 style={{margin:'.2em auto'}}> {p.productName}</h1>
                 <img src={p.productImage} alt=""  width={400} style={{margin:'auto'}}/>
                 </>
                )
            
          }
       } )}
     
    </div>
  )
}
