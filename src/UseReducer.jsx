import {React,useReducer} from 'react'

//when complex logic is used 
//use usereducer instead of usestate if complex logic
//useReducer(reducer,initialState)
//reducer is a pure function and always returns the same output if the same arugments is passed in 


// const UseReducer = () => {
//     const countRed=(state,action)=>{

//         switch(action.type){
//             case 'Increment':
//                 return {count:state.count+1};
//             case 'Decrement':
//                 return {count:state.count-1};
//                 default:
//                     return state;
            
//         }
        
//     }
//     const [state, dispatch] = useReducer(countRed,{count:0})
//   return (
//     <div>UseReducer
//         <h1>{state.count}</h1>
//         <button onClick={()=>dispatch({type:'Increment'})}>Increase</button>
//         <button onClick={()=>dispatch({type:'Decrement'})}>Decrease</button>
//     </div>
//   )
// }

// export default UseReducer


const initialState=0;
const reducer=(state,action)=>{
  if(action.type=='Increment'){
    return state +1;
  }
 else if(action.type=='Decrement'){
    return state -1;
  }
    return state;
}
const UseReducer = () => {
    const [state,dispatch]= useReducer(reducer,initialState);
    //we call dispatch when we want to change state 
  return (
    <div>UseReducer
            <h1>{state}</h1>
           <button onClick={()=>dispatch({type:'Increment'})}>Increase</button>
            <button onClick={()=>dispatch({type:'Decrement'})}>Decrease</button>
       </div>
  )
}

export default UseReducer