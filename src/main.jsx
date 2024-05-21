//Importing: to use an emported component, you need to import it in the destination file using import syntax


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Component from './Component.jsx'
import DynamicComp from './DynamicComp.jsx'
import TodoApp from './TodoApp.jsx'
import Mapmethod from './Mapmethod.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'
import PropsPrac from './PropsPrac.jsx'
import HandlingEvents from './HandlingEvents.jsx'
import States from './States.jsx'
import Counter from './Counter.jsx'
import UseReducer from './UseReducer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import UseEffect from './UseEffect.jsx'
import UseRef from './UseRef.jsx'
import ContextApi from './ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Component/>
    <DynamicComp/>
    <TodoApp/>
    <Mapmethod/>
    <ConditionalRendering/>
    <PropsPrac name="Anisha "> </PropsPrac>
    <PropsPrac name="yash "> </PropsPrac>
    <PropsPrac name="sakshi "> </PropsPrac>
    <HandlingEvents/>
    <States/>
    <Counter/>
    <UseReducer/>
<UseEffect/>
<UseRef/>
<ContextApi/>

   
 


  </React.StrictMode>,
)
