//the state is an updatable structure that is used to contain data or information about the component. The state in a component can change over time.
//A state with a component is stateful component 
//It is heart of react component which determines the behavior of the component and how it will render
//makes the component dynamic and interactive
import React, { useState } from 'react'

const States = () => {
    let [data,setData]= useState("Anisha Khatri")
    

    const updateData=()=>{
        setData("Yashhh")
        alert(data);
    }
    return (
        <div>
            <h1>State</h1>
            <h2>{data}</h2>
            <button onClick={updateData}>Update Value</button>
        </div>

    )
}

export default States