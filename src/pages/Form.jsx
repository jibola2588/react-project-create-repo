import React, { Component } from 'react';

// controlled form

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email: '',
         password:'',
         confirmPassword : ''
      }
    }
   
  render() {
    return (
       <div
       style = {{
        height:'100vh',
        display:'flex',
       justifyContent:'center',
       alignItems:'center'
        }}>
      <form 
        onSubmit = {this.handleSubmit}
      style = {{
          boxShadow:'0px 0px 4px 2px silver',
          maxWidth:"500px",
          margin:"auto",
          display:'flex',
          flexDirection:'column',
          padding:'20px 20px 20px 20px',
          gap:'20px'
          }}>
              <div className="top">
                  <label>Eamil :</label>
                <input 
                type="email" 
                onChange = {e => {
                    console.log(e.target.value)
                    this.setState({ 
                        email : e.target.value
                    })
                }}
                style = {{
                    width:'95%',
                    
                }}
                value = {this.state.email}
                />
              </div>
              <div className="top">
                  <label>password :</label>
                <input 
                type="password" 
                style = {{
                    width:'95%',
                    
                }}
                value = {this.state.password}
                onChange = {e => console.log(e.target.value)}
                />
              </div>
              <div className="top">
                  <label>confirm password :</label>
                <input 
                type="password" 
                style = {{
                    width:'95%',
                    
                }}
                value = {this.state.confirmPassword}
                onChange = {e => console.log(e.target.value)}
                />
              </div>
              <button
              style = {{
                width:'100%',
                padding:'15px',
                textAlign:'center',
                backgroundColor:'teal',
                fontWeight:'bold'
            }}
            type = "submit"
              >sign in</button>
        
      </form>

      </div>
    );
  }
}
