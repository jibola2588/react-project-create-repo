import React,{useState} from 'react'
import ReactDom from 'react-dom/client'
import {FirstStateElement} from './components/First-State-Element'
// import Jibola from './components/Jibola'
import './index.css'
// import {FirstStateClass } from './pages/First-State-Class'
// import Jibola from './components/Jibola'

import {Counter } from './pages/Counter'

const App = () => { 
  const [show,setShow] =  useState(true)
    return ( 
        <div className = "text-center">
         {/* <FirstStateElement /> */}
        {/* <Jibola /> */}  

        {/* {show && <FirstStateClass/>  } 
        <button onClick = {() => setShow(false)} className = "p-4 bg-danger text-info">press me</button>   */}
        <Counter />
  </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App />)
