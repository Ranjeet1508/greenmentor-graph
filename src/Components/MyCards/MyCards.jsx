import React from 'react'
import SubCards from './SubCards'
import { color } from 'framer-motion'
import './mycard.css'
const MyCards = () => {
  return (
    <div className='cardsection'>
      <SubCards heading={`Current Year Emission`} emission={'39699 CO2e'} percentage={'7.6% YOY'} color={'red'}/>
      <SubCards heading={`Revenue to emission ratio`} emission={'136 CO2e'} percentage={'3.7% YOY'} color={'yellow'}/>
      <SubCards heading={`Category-1`} emission={''} percentage={'32% of Scope3'} color={'green'}/>

      <div className='lastCard'>
        <p>Total number of reached suppliers</p>
        <h1>143</h1>
      </div>
    </div>
  )
}

export default MyCards
