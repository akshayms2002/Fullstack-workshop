import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Userlist() {

const[User,setUser]=useState([])
useEffect(()=>{
    try{
    const fetchdata=async()=>{
    const response=await axios.get("https://jsonplaceholder.typicode.com/users") 
    setUser(response.data)
   
}
fetchdata()
}
catch(error)
{
 console.log(error)
}
},[])

  return (
    <div>
        {User.map((item)=>(
            <div key={item.id}>
       <h1>{item.username}</h1>
       <h1>{item.email}</h1>
       </div>
        ))}
    </div>
  )
}

export default Userlist