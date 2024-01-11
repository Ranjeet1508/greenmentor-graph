import React from 'react'
import './timeline.css'

const Timeline = () => {
  return (
    <div className='timeline'>
      <select>
        <option value="Jan22-Dec23">Show Timeline: <span className='date'>Jan'22-Dec'23</span></option>
        <option value="Apr22-Apr23">Show Timeline: <span className='date'>Apr'22-Apr'23</span></option>
        <option value="Aug22-Aug23">Show Timeline: <span className='date'>Aug'22-Aug'23</span></option>
      </select>
    </div>
  )
}

export default Timeline
