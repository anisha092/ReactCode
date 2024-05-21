import React from 'react'
//use App.jsx to see working
const FunctionasProp = (props) => {
  return (
    <div><h1>User components </h1>
    <button onClick={()=>props.data()}> Call data function</button>
    </div>
  )
}

export default FunctionasProp