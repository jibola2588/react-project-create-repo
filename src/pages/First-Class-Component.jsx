// Created on 26th August, Same day with Card.jsx

import React, { Component } from 'react';
import {Card} from '../components/Card'


export class FirstClassComponent extends Component {
  render() {
    return (
       <div className="d-flex justify-content-between">
          <Card 
          img = 'http://www.splash.com/images/resized_and_crop/250/200/eyJpZCI6ImZjMDg4MTQzNjg4NWZjYzc0MWU3ZjU1MzVjMDZiODgyIiwic3RvcmFnZSI6InN0b3JlIn0?signature=4c2e7728002e1531332002c0e16f8491992be463951f1426f66ce8df5b42bc7c'
          title = 'Bad guy'
          content = "This guy can swim,peraventure the drops inside the ocean"
          />
          <Card 
          img = "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
          title = 'Fine girl'
          content = "See a fine person,who can resist her"
          />
          <Card 
          img = "https://cdn.pixabay.com/photo/2022/07/31/20/00/little-boy-7356705__480.jpg"
          title = 'A litle kid'
          content = "Come and see me next 5 years"
          />
        
          
       </div>
    );
  }
}

