import React, { useState } from 'react'

function Five() {
   
   const [num,setNum]=useState(0);
    const incr=()=>{
        setNum(num+1)
    }
    const decr=()=>{
        setNum(num-1)
    }
    const reset=()=>{
        setNum(0)
    }
  return (
     <div>
     <h1>count:{num}</h1>
     <button onClick={incr}>Add</button>
     <button onClick={decr}>Sub</button>
     <button onClick={reset}>Reset</button>

     </div>
  )
}

export default Five