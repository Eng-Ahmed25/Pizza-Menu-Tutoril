import React from 'react'

const Pizza = ({pizza}) => {
  return (
    <div>
        <div className='pizza'>
        <img src={pizza.photoName} alt="" />
        <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
        </div>
        </div>
    </div>
  )
}

export default Pizza