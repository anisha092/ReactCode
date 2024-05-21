import React from 'react'

// When developing a React application, you'll often pass data from a parent component down to a child component. 
// This is typically done through props, the arguments you pass to a function.
//  However, as the complexity of your components grows, so does the props object. 
// This is where destructuring props becomes invaluable.

const DestructingProps = () => {
    // Without destructuring
function MyComponent(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  // With destructuring
  function MyComponent({ name }) {
    return <h1>Hello, {name}</h1>;
  }

  // Destructuring props in a functional component
function Greeting({ firstName, lastName }) {
    return <p>Welcome, {firstName} {lastName}!</p>;
  }

  // Destructuring props in a functional component
function PersonProfile({ name, location }) {
    return (
      <div>
        <h1>{name}</h1>
        <p>{location}</p>
      </div>
    );
  }
  
  return (
    <div></div>
  )
}

export default DestructingProps