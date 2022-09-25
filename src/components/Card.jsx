//Class o 26th August 2022. 

import React, { Component } from 'react';

export class Card extends Component{   
    constructor(props){ 
        super(props)
    }
  render() {
    return (
      <div>
        <div className="card m-3" style={{width:"10rem"}}>
   <h3>User {this.props.id}</h3>
    <p>name : <span>{this.props.name}</span></p>
   <p>age : <span>{this.props.age}</span></p>
   <p>gender : <span>{this.props.gender}</span></p>
    </div>
      </div>
    );
  }
}
