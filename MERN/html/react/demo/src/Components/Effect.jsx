import React, { useEffect, useState } from 'react'

function Effect() {
const [count,setNum]=useState(0)
const [count2,setNum2]=useState(0)

useEffect(()=>{
    console.log("started")
},[count])
const incr=()=>{
    setNum(count+1)
}

const decr=()=>{
    setNum2(count2-1)
}

  return (
    <div>
        
<h1>{count}</h1>
<h1>{count2}</h1>
<button onClick={incr}>+</button>
<button onClick={decr}>-</button>

    </div>
  )
}

export default Effect