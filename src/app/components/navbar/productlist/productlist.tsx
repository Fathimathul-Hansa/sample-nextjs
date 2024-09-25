import { Services } from '@/app/services/service';
import React from 'react'
import Productcard from '../productcard/productcard';

export default async function Productlist() {

    var products=await Services.getAllProducts();

  return (
    <div>
  {products.map((p:any)=>{return<Productcard pro={p}/>})}
    </div>
  )
}
