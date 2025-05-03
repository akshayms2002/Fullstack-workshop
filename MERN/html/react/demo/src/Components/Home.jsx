import React from 'react'

function Home(props) {
  return (
    <div>

<h1>{props.name}</h1>
<h1>{props.age}</h1>
<h2>{props.job}</h2>

    </div>
  )
}

export default Home