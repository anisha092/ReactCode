import React, { createContext } from 'react'
import A from './A'

const FirstName= createContext();
const lastName = createContext();
const ContextApi = () => {
  return (
    <>
    <FirstName.Provider value={'Yash brother of anishay '}>
    <lastName.Provider value={'Khatri'}> 
             
    <A/>
    </lastName.Provider>

    </FirstName.Provider>


    
    </>
  )
}

export default ContextApi
export {FirstName, lastName}