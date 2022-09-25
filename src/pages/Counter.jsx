//2nd Sept, 2022. States continued wit Styled Component implemented
//

import {Component} from 'react'
import {Container,
Header1,
Button} from './counter.styles'


export class Counter extends Component { 
    constructor(props) {
      super(props)
    
      this.state = 
      {
         count : 0
      }
    //   this.handleClick = this.handleClick.bind(this)
    }
    // componentDidMount(){ 
    //  this.timer = setInterval( () => this.incrementCount(),1000)
    // }
    // componentWillUpdate(){ 
    //     document.title = `count is ${this.state.count}` 
    //     console.log( `component has updated and count is ${this.state.count}`);
       
    // }
    // componentWillUnmount(){ 
    //  clearInterval(this.timer)
    // }

    // incrementCount(){ 
    //     this.setState((state) => ({ count : state.count +1 }))

    //     // this.setState({ 
    //     //     count : this.state.count +1
    //     // })
    // }
    handleClick() { 
        this.setState((state) => ({ count : state.count +1 }))
    }
    
render(){ 
    // const style1 = { 
    //     margin : 'auto',
    //     border: '1px solid yellow'
    // }
  
    return( 
        <Container>
            <Header1 type="A">counter</Header1>
            <Header1 type="B">counter2</Header1>
            <Header1 type="C">counter3</Header1>
            <h3>count -- {this.state.count} </h3>
            <Button
             onClick = {() => this.handleClick()}
            >Press me</Button>
        </Container>
    )
}
}