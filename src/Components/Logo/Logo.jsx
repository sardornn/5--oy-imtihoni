import React from 'react'
import {Link} from 'react-router-dom'
import './logo.css'
import LogoSvg from './Img/logo.svg'
const Logo = () => {
  return (
   <Link to='/' >
     <img src={LogoSvg} alt="logoheader" />
  </Link>

  )
}

export default Logo