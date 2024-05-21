import React from 'react'
import ButtonComp from './ButtonComp'
// component is reusable piece of code
const Component = () => {
  return (

    //jsx determines how the UI will look wherever the component is used
    // jsx resemebles html, its actuallly javascript XML
    //Babel is tool that is used to convert the jsx into javascript at backend

    <>
    <h1>This is my first Component</h1>
    <ButtonComp/>
    </>
  )
}

// default export allows exporting a single component as the default from a module
// Named export allows exporting multiple items from a module


export default Component

