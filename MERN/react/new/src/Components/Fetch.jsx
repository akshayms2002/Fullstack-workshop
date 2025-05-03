import React, { useEffect, useState } from 'react'

    function Fetch() {

    const[store,setStore]=useState([])
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>setStore(data))
 .catch((error)=>console.log(error))
})

    return (
      <div> 
        {
    store.map((item)=>(
    <div key={item.id}>
    <h1>{item.id}</h1>
    <h1>{item.body}</h1>
    </div>
   ) )
   }
  </div>
    )
}

export default Fetch


