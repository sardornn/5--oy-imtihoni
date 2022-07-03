import React from 'react'
import './Sidebar.css'
import logoFace from './Img/face.svg'
import logoGit from './Img/git.svg'
import logoTwit from './Img/bnn.svg'
import logoldn from './Img/ldn.svg'
import logobtn from './Img/btn.svg'



const Sidebar = () => {
    return (
        <div className='sidebar'>
        <h2 className=' sidebar_header'>What I do!</h2>
        <p className=' sidebar_paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
       
       
        <div className='explore_div' style={{display: 'flex' , alignItems:'center' }}>
        <h3 className='explore'>EXPLORE ME</h3>
        <button className=' explore_button'>
        <img src={logobtn} alt="logoFace" />
        </button>
        </div>
        
        <div >
        <span className='span_logo'>
            <img src={logoFace} alt="logoFace" /> </span>
        <span className='span_logo'>
        <img src={logoGit} alt="logoFace" /> </span>
         
        <span className='span_logo'>
        <img src={logoTwit} alt="logoFace" /> </span>
        <span className='span_logo'>
        <img src={logoldn} alt="logoFace" /> </span>
        </div>
        
        
        </div>
        )
    }
    
    export default Sidebar