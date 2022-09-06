import React from 'react'
import ReactDom from 'react-dom/client'
// import {FirstStateElement} from './components/First-State-Element'
// import Jibola from './components/Jibola'
import './index.css'
// import {FirstStateClass } from './pages/First-State-Class'
// import Jibola from './components/Jibola'

// import {Counter } from './pages/Counter'
import {Form}  from './pages/Form'
// import DynamicProps  from './pages/DynamicProps'

const App = () => { 
  // const [show,setShow] =  useState(true)
    return ( 
        <div className = "text-center">
        <Form />
         {/* <FirstStateElement /> */}
        {/* <Jibola /> */}  
        {/* {show && <FirstStateClass/>  } 
        <button onClick = {() => setShow(false)} className = "p-4 bg-danger text-info">press me</button>   */}
        {/* <Counter /> */}
        {/* <div style ={{display:"flex" ,gap:'20px'}} >
        <DynamicProps 
        img = 'https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_960_720.jpg'
        name = "John Doe"
        email = 'doe@yahoo.com'
        phone = '070357809600'
        />
        <DynamicProps 
                email = 'doe@yahoo.com'
                phone = '070357809600'
                fav = 'ball'
                age = {24}
        />
        <DynamicProps 
          img = "https://cdn.pixabay.com/photo/2021/02/11/05/34/woman-6004286_960_720.jpg"
          fav = 'ball'
          age = { 34 }
          name = "folish son"
        />
        </div> */}
  </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App />)
