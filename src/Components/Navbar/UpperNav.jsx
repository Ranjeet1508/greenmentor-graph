import React from 'react'
import './uppernav.css';
import Group from '../../Assests/Group.svg'
import user from '../../Assests/user.svg'
import dropdown from '../../Assests/dropdown.svg'
import Vector from '../../Assests/Vector.svg'

const UpperNav = () => {
  return (
    <div className='uppernav'>
      <div className='left'>
        <img src={Group} alt="group" />
        <p>Category-1</p>
      </div>

      <div className='right'>
        <img src={user} alt="user" />
        <img src={dropdown} alt="dropdown" />
        <img src={Vector} alt="vector" />
      </div>
    </div>
  )
}

export default UpperNav
