import React from 'react'
import Navlinks from './Navlinks'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import { useState } from 'react'

export default function MobileNav() {
    const [clicked, setClicked] = useState(false);
    const hamburger =  <GiHamburgerMenu className="hamburger" size="10%" color="#A02279" 
    onClick={() => setClicked(!clicked)}/>

    const close = <GrClose className="hamburger" id='close' size="10%" color="#A02279" 
    onClick={() => setClicked(!clicked)}/>

    const closeNav = () => setClicked(false)
  return (
    <div className='mobile-nav'>
        {clicked? close: hamburger}
        {clicked && <Navlinks isMobile={true} closeNav={closeNav} />}
    </div>
  )
}
