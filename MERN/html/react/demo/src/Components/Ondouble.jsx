import React from 'react'

function Ondouble() {

 const   onDoubleClick=(name)=>{
    alert("my name is"+name)
 }

  return (
    <div>
     <h1 onDoubleClick={()=>onDoubleClick("Afsana")}>hii</h1>   
    </div>
  )
}

export default Ondouble