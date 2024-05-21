import React from 'react'
//MapMethod
//Render lists from array data
//Transforms array items into jsx
const Mapmethod = () => {
    let fooditems=['Daal', 'Roti','sabzi','Raita','Salad']
  return (
    // <>
    // <h1>Healthy Food items </h1>
    // <ul>
    //     {fooditems.map(items=> <li>{items}</li>)}
    // </ul>
    
    // </>
    <>
    <h1>Healthy Food items </h1>
     <ul>
       {fooditems.map(item=> <li key={item}>{item }</li>)}
    </ul>
    
    </>
  )
}

export default Mapmethod