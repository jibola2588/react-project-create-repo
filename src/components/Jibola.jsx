 import React from 'react'
 import {Card} from './Card'
 
 class Jibola extends React.Component{ 
    render(){ 
        return ( 
            <div>
             <h1>  Users </h1>
                <div>
                  <Card 
                  id = '1'
                  name = "chioma"
                  age = '23'
                  gender = 'male'
                  />
                  <Card 
                  id = '2'
                  name = "airnoh"
                  age = '13'
                  gender = 'female'
                  />
                  <Card 
                  id = '3'
                   name = "abas"
                   age = '43'
                   gender = 'female'
                  />
                  <Card 
                  id = '4'
                  name = "dan"
                  age = '35'
                  gender = 'male'/>
                </div>

            </div>
        )
    }
}
export default Jibola