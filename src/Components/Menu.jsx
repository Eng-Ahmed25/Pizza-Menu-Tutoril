import React from 'react'
import Pizza from './Pizza';

const Menu = ({pizzaData}) => {
  
  return (
    <div className='menu'>
        <h2>Our Menu</h2>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
        <div className='pizzas'>
        {pizzaData.map(pizza=>
            (
                <Pizza pizza = {pizza}/>
            ))}
        </div>
    </div>
  )
}

export default Menu