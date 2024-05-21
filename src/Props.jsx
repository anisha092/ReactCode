import React from 'react'
//props are used for passing data
//pass data from parent to child component
//makes component reusable
//props are inmutable 
//used for commmunication between components
const Props = () => {
    let fooditems=['Daal', 'Roti','sabzi','Raita','Salad']

  return (
    <ul>
    {fooditems.map(item=> <li key={item}>{item }</li>)}
 </ul>
  )
}

export default Props