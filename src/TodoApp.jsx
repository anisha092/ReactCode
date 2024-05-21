import React from 'react'
import AddTodo from './AddTodo'
import Todoitem from './Todoitem'

const TodoApp = () => {
    const todoItems=[{
        name:'Buy milk',
        dueDate:'4/5/77'
    },
    {
        name:'go to collegek',
        dueDate:'4/5/77'
    }
];
return (
    <center className='todo-container'>
        <h1>TodoApp</h1>
        <AddTodo/>
        <Todoitem todoname="buy milk" tododate="4/5/24"/>
         <Todoitem todoname="Go to college" tododate="4/5/24"/>
         <Todoitem todoname="Go to college" tododate="4/5/24"/>

    </center>
)
}
   



export default TodoApp