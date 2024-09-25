"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function Productcard(props:any) {
  console.log("props from productcard page",props)
  const router=useRouter();

    const[selectedProd,setSelectedProd]=useState({});
    var prod=props.pro;

  //   console.log(prod)

    function OnSelectedProd(){
     console.log("selected product",prod)
     setSelectedProd(prod);
    }

    // function filterproducts(){
    //   let searchParams='';
    //   if(title){
    //     searchParams=searchParams +'title='+prod.price;
    //   }
    //   router.push('/products?'+searchParams)
      
    // }

  

  return (
    <div>
       <button onClick={()=>{router.push(`/products/${prod.id}`),{ scroll: true }}}>Detailed page</button>
     
        {/* <button onClick={OnSelectedProd}><img src={prod.image} width={100}/></button> */}
        {/* {prod.title} */}
         {/* {<img src={prod.image} width={100}/>} */}
         {/* {prod.title} */}
   <Link href={'/products/' +prod.id}> {prod.title}</Link>
   <button onClick={()=>{router.push('/products?title='+prod.title )}}>same page navigation</button>

   </div>
  )
}
