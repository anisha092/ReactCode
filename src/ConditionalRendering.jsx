import React from 'react'
import Props from './Props'
//Display content based on certain conditions
//Allows for dynamic user interface
//it reduce unnessary rendering
const ConditionalRendering = () => {
    let fooditems=['Daal', 'Roti','sabzi','Raita','Salad']
    // let fooditems=[]
    // if (fooditems.length==0){
    //     return <h3>I'm Hungry</h3>
    // }
  return (
    <>
    <h1>Healthy Food items </h1>
    {/* using ternary condition */}
    {fooditems.length==0 ? <h3>I'm Hungry</h3>:null }
    <Props/>
    
    </>
  )
}

export default ConditionalRendering