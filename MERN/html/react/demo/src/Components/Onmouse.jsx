import React from 'react'

function Onmouse() {

const onMouse=()=>{
    alert("you pointed")
}

  return (
    <div>
        
        <input type="text"onMouseOver={onMouse}/>

    </div>
  )
}

export default Onmouse