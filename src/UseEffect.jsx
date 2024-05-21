import React, { useEffect, useState } from 'react'

//useEffect will tell react that your component needs to do something  after render
//use effect hook work combined as componentDidMount, ComponentDidUpdadte and ComponwntWillUnmount


const UseEffect = () => {

    const [count, setcount] = useState(0)

    useEffect(()=>{
       const fetchData= async()=>{
        const api= await fetch('https://jsonplaceholder.typicode.com/todos')
        const result= await api.json();
        console.table(result)
    }
    fetchData()
    },[])


  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>Click me to inc</button>
    <button onClick={()=>setcount(count-1)}>Click me to dec </button>

    </>
  )
}

export default UseEffect