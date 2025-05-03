import React from 'react'

function Onchange() {

const onChange=()=>{
    alert("you typed")
}

  return (
    <div>
        
<input type="text"onChange={onChange}/>

    </div>
  )
}

export default Onchange