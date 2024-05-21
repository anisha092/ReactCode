import React from 'react'
//Dynamic content: Jsx allows the creation of dynamic and interactive UI components
//Javascript expression: using{} we can embed any js expression directly within jsx, this includes variables , function calls and more
const DynamicComp = () => {
    let myName='Anisha';
    let number=452;
    let fullName=()=>{
        return 'Anisha Khatri'
    }
  return (
    <>
    <h1>
        Hello I'm {myName}
    </h1>

    <h2>
        My full name is {fullName()}
    </h2>

    <h3>This is message no {number}</h3>
    </>
   
  )
}

export default DynamicComp