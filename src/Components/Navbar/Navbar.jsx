import React from 'react'
import './navbar.css'
import logo from '../../Assests/logo.png'
import energy from '../../Assests/energy.svg'
import water from '../../Assests/water.svg'
import deleteIcon from '../../Assests/deleteIcon.svg'
import whitedropdown from '../../Assests/whitedropdown.svg'
import { Select } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='topcontainer'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='data-in'>
          <div className='heading'>
            <p>DATA-IN</p>

            <div className='energy'>
              <img src={energy} alt="energy" />

              <Select variant='flushed'
                placeholder='Energy'
                border="none" 
                bg={'transparent'}
                >
                <option value='option1'>Category 1</option>
                <option value='option2'>Category 2</option>
                <option value='option3'>Category 3</option>
                <option value='option3'>Category 4</option>
              </Select>
              
            </div>

            <div className='water'>
              <img src={water} alt="water" />
              <p>Water and Effluents</p>
              <img src={whitedropdown} alt="whitedropdown" />
            </div>
          </div>


        </div>

        <div className='analyze'>
          <div className='heading'>
            <p>ANALYZE</p>
            <div className='energy'>
              <img src={energy} alt="energy" />
              <p>Energy</p>
            </div>

            <div className='water'>
              <img src={deleteIcon} alt="energy" />
              <p> Waste <span>(Beta)</span></p>
            </div>

          </div>
        </div>


        <button>Open Help Centre</button>
      </div>


      <div className='powered-by'>
        <p>POWERED BY <span>Longsight</span></p>
      </div>
    </div>
  )
}

export default Navbar
