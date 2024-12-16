import React from 'react'

const Order = ({isOpen , openHour , closeHour}) => {
  return (
    <div className='Order'>

    {isOpen && <p>We're open from {openHour}:00 to {closeHour}00. Come visit us or order online.</p>} 

    </div>
  )
}

export default Order