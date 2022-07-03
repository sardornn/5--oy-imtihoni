import React, { useContext, useRef, useState } from 'react'
import { NavLink} from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'
import Search from './Img/search.svg'
import { PostsContext } from '../../Context/PostContext'



export const Header = () => {
  const [click, setClick]= useState(true);
  const inputRef= useRef()
 
  const clickedButton =()=>{
    return setClick(!click)
  }

  const {posts, setPosts} = useContext(PostsContext)
 const searchPosts= (evt)=>{
const inputValue = evt.target.value.trim();
 
posts.filter((post)=> {
  if(inputValue= ''){
    return post
  }
  else if ( post.title.includes(inputValue)){
    return post
  }
})
 }



  return (
    <div className='header'>
    
    <div className='header_left'>
    <Logo />
    <div className='header_hamburder'>
    <button className='button_hamburger'  onClick={clickedButton}>

    <span className={` ${ click? 'span_ok' : 'span' } `}  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="4" y1="8.5" x2="28" y2="8.5" stroke="black"/>
<line x1="4" y1="15.5" x2="28" y2="15.5" stroke="black"/>
<line x1="4" y1="22.5" x2="28" y2="22.5" stroke="black"/>
</svg>
    </span>
    <span className={` ${ click? 'span' : 'span_ok' } `} >
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.646447" y1="14.6464" x2="14.6464" y2="0.646447" stroke="black"/>
<line x1="0.341159" y1="0.634472" x2="15.3412" y2="14.6345" stroke="black"/>
</svg>

    </span>
    </button>
    </div>
    <nav className= {`navlist ${ click? 'span' : 'span_ok' } `}>

   <li className='nav_item'> <NavLink className={({isActive})=> 
    isActive? "navitem navitem--active" : 'navitem'
  } to='/'>All</NavLink></li>

<li className='nav_item' >  <NavLink className={({isActive})=> 
  isActive? "navitem navitem--active" : 'navitem'
} to='/design'>Design Theory</NavLink></li>

<li  className='nav_item'><NavLink className={({isActive})=> 
isActive? "navitem navitem--active" : 'navitem'
} to='/ux'>UX</NavLink></li>

<li  className='nav_item'><NavLink className={({isActive})=> 
isActive? "navitem navitem--active" : 'navitem'
} to='/ui'>UI</NavLink></li>

<li  className='nav_item'><NavLink className={({isActive})=> 
isActive? "navitem navitem--active" : 'navitem'
} to='/typography'>Typography</NavLink> </li>
</nav>
</div>


<div className='header_search'>
<input className='input_serach' type='text' placeholder='Serach' />

<button onClick={searchPosts} className='button_search'><img src={Search} alt="search" /></button>
</div>
</div>

)
}

// style={{ clicked? display:'block' } }