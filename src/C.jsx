import React from 'react'
import {FirstName, lastName} from './ContextApi'
const C = () => {
  return (

    <>
    <FirstName.Consumer>
        {(fName)=>{
          return (
            <lastName.Consumer>
                     {(lname)=>{
               return  <h1>My name is {fName} {lname} </h1>
                     }}          
            </lastName.Consumer>
          )
          
        }}
    </FirstName.Consumer>
    </>
  )
}

export default C