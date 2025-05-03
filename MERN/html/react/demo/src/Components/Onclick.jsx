import React from 'react'

function Onclick() {

const onClickHandle=()=>{
    console.log("you clicked")
}

const onClickH=(name)=>{
alert ("you clicked"+name)
}

  return (
    <div>

<button onClick={onClickHandle}>Submit</button>
<button onClick={()=>onClickH("Afsana")}>Login</button>
    </div>
  )
}

export default Onclick