import React from 'react'
import infoIcon from '../../Assests/infoIcon.svg'
import './subcards.css'

const SubCards = ({heading, emission, percentage, color}) => {
  return (
    <div className='subcard'>
      <div className='card-heading'>
        <p>{heading}</p>
        <img src={infoIcon} alt="info" />
      </div>

      <div className='subheading' style={{border: `1px solid ${color}`}}>
        <p>{emission}</p>
        <p>{percentage}</p>
      </div>
    </div>
  )
}

export default SubCards
