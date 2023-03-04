import React from 'react'

const Person = ({name, age}) => {
  return (
    <div className='item'>
        <h4>{name}</h4>
        <h5>{age}</h5>
    </div>
  )
}

export default Person