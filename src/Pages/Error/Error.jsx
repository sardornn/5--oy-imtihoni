import React from 'react'
import rasm from './Img/error.png'
import './Error.css'
const Error = () => {
  return (
    <div className='error'>
      
      <img className='error_img' src={rasm} alt="404 foto" />
      <h4 className='errot_heading'>Page not found - 404</h4>
      <p className='error_paragraf'>This page not found (deleted or never exists).<br/>Try a phrase in search box or back to home and start again.</p>
      <p className='error_more'>TAKE ME HOME!</p>
      </div>
  )
}

export default Error