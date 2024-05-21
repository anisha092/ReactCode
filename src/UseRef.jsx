import React, { useRef } from 'react'

const UseRef = () => {
    const myRef= useRef(null);
    const focusinput=()=>{
        myRef.current.focus();
    }
  return (
    <div>
        <h1>
        UseRef
        </h1>
     <input ref={myRef} type="text" />
     <button onClick={focusinput}>Focus</button>        
        </div>
  )
}

export default UseRef