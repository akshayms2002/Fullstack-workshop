import React, { useState } from 'react'

function State() {

const[color,setColor]=useState("red");
const changeColor=()=>{
    setColor('blue')
}

  return (

    <div>

<h1>the colour is {color}</h1>
<button onClick={changeColor}>Submit</button>

    </div>
  )
}

export default State