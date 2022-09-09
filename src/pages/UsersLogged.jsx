import React, { Component } from 'react';
import {LoginUser} from '../components/LoginUser'
import {AuthUser} from '../components/AuthUser'




export  class UsersLogged extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         display : true
      }
    }
    handleUser = () => { 
        this.setState({ 
            display : !this.state.display
        })
    }
  render() {
      const showUser = this.state.display
      const User = () => { 
          if(showUser) { 
              return    <LoginUser />
          }else{ 
              return   <AuthUser />
          }
      }
    return (
      <div>
        <h3 
        style = {{textAlign:'center'}}
        >
             {this.state.display ?  "Signin" : "Welcome user,complete your profile"}
        </h3>
        <User />
        <button 
        onClick ={this.handleUser}
        className = 'mt-2 bg-teal-400 font-bold text-[#fff] text-sm px-8 py-2'>
           {this.state.display ?  "Login" : "LogOut"}
            </button>
      </div>
    );
  }
}
