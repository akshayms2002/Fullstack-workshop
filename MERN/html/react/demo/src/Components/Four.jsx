import React from 'react'

function Four({details}) {

  return (
    <div>
        {details.map((item)=>{
            return(
                <div>
                    <h1>{item.name}</h1>
                    <h1>{item.age}</h1>
                </div>
            )
        })}


    </div>
  )
}

export default Four