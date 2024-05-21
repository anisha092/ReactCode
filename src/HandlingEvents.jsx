import React from 'react'
//React onclick event handler enanbles you to call a function and tiggers an action when an user clicks an element such as a button in your app
//React event handlers appears inside curly braces{}
const HandlingEvents = () => {
    const handleClick = (event) => {
        console.log('Button clicked!', event); // Access event object
        alert('You clicked the button!');
      };
  return (
    <div>
    <button onClick={handleClick}>Click me</button>
  </div>
  )
}

export default HandlingEvents