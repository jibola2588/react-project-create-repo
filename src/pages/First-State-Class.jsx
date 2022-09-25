// 30th Aug, 2022

import {Component} from 'react'
import './firstState.css'

export class FirstStateClass extends Component{ 
    constructor(props) {
      super(props)
      this.state = { 
        date : new Date()
      }
    }
    componentDidMount(){ 
        console.log('component has mounted');  
        this.timer = setInterval(() => {this.updateTime()},1000)
    }
    componentWillUpdate(){ 
        console.log(`component has updated and the clock is ${this.state.date.toLocaleTimeString()}`);  
    }
    componentWillUnmount(){ 
        clearInterval(this.timer)
        console.log(`component has unmounted  and the clock is ${this.state.date.toLocaleTimeString()}`);  

    }
    updateTime(){ 
        this.setState({ 
            date : new Date()
        })
    }
   
    
    render(){ 
        const style = { 
            color : 'red',
            backgroundColor:'green'
        }
        return( 
            <div>
                <h1 
                 style = {style}
                className = " text-center">clock --  {this.state.date.toLocaleTimeString()} </h1>
            </div>
        )
    }
}