import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Signup() {
  const navigate =useNavigate()
  const[name,setname]=useState("")
  const[password,setpassword]=useState("")

 async function Submit(e){
    e.preventDefault()
    // console.log("name:",name);
    // console.log("password:",password);
    try{
    const res = await axios.post("http://localhost:3077/signup",{name:name,password:password})
  
    if(res.status===200){
      navigate('/login')
    }
  
  }catch(error){
      console.log(error);
    }

  }

  return (
    <div className="signup">
      <form action="">
        <div className="coat">
          <h1>Sign Up</h1>
          <div className="name">
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e)=>setname(e.target.value)}/>
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
          </div>
          <button onClick={Submit}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
