import React from 'react'

import FunctionasProp from './FunctionasProp'
const App = () => {
  function getData(){
    alert("Hello from App")
  }
  return (
    <>
    <FunctionasProp data={getData}/>
    
    </>
  )
}

export default App
// const App = () => {

//   let counter=15;
//   const AddValue=()=>{
//    counter=counter+1;
//   }
//   return (
//     <>
//     <h1>Hooks</h1>

//     <h2>Counter value : {counter}</h2>
//     <button
//     onClick={AddValue}>Add Value</button>
//      <br/>
//     <button>Remove value</button>
//     </>
//   )

// }

// export default App