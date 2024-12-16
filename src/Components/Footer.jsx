import React from 'react'
import Order from './Order';

const Footer = ({pizzaData}) => {
    const date= new Date()
    const hour = date.getHours()
    const openHour = 12 ; 
    const closeHour = 22
    const isOpen = hour >=openHour && hour <=closeHour

  return (
    <div className='footer'>
        <div className='order'>
        {isOpen ?
        
        (   <Order isOpen={isOpen} openHour={openHour} closeHour={closeHour}/>)
        
        :
        <p>We're open Between {openHour}:00 to {closeHour}00. Come visit us Next Time.</p>
    }
        <button className='btn'>Order</button>
    </div>
    </div>
  )
}

export default Footer