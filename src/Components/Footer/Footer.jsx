import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import FootLogo from './Img/footer.svg'
const Footer = () => {
    return (
        <div className='footer'>
        <span className='footer_logo'>
        <img src={FootLogo} alt="logoFace" />
        </span>
        
       <div className='footer_left'>
       <div className='footer_social'>
        <h3 className='footer_heading'>FIGHT WITH ME ON:</h3>
        <ul className='footer_list_social'>
        <li className='footer_list_item'><a className='footer_link' href='/' >Twitter</a></li>
        <li className='footer_list_item'><a className='footer_link' href="/">Instagram</a> </li>
        <li className='footer_list_item'><a className='footer_link' href="/">Telegram</a></li>
        <li className='footer_list_item'><a className='footer_link' href="/">You tube</a></li>
        <li className='footer_list_item'><a className='footer_link' href="/">Figma</a></li>
        </ul>
        </div>

        <div className='footer_social'>
        <h3 className='footer_heading'>WHAT I HAVE DONE:</h3>
        <ul className='footer_list_social'>
        <li className='footer_list_item'><a className='footer_link'  href='/' >Xalq Kutubxonasi</a></li>
        <li className='footer_list_item'><a className='footer_link' href="/">Websitee</a> </li>
        <li className='footer_list_item'><a className='footer_link' href="/">Website</a></li>
        <li className='footer_list_item'><a className='footer_link' href="/">Play Market</a></li>
        <li className='footer_list_item'><a className='footer_link' href="/">App Store</a></li>
        </ul>
        </div>

        <ul className='fuuter_contact_list'>
        <li className='footer_contact'><a className='footer_contact_item' href='/' >Contact</a></li>
        <li className='footer_contact'><a className='footer_contact_item' href="/">Blog</a> </li>
        <li className='footer_contact'><a className='footer_contact_item' href="/">Dribbble</a></li>
        <li className='footer_contact'><a className='footer_contact_item' href="/">Behance</a></li>
      
        </ul>
       </div>
        </div>
        )
    }
    
    export default Footer