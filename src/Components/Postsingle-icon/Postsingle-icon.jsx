import React from 'react'
import rasm from './Img/sidesh.png'
import rasms from './Img/sideqol.png'

const PostsingleIcon = () => {
  return (
    <div className='postsingle_left'>
<div>
      <span className='post_span_icon'><img src={rasm} alt="qol" width='18px' height='19px' /></span>
      <p className='postsingle_left_par'>125</p>
  </div>
  <div>
      <span className='post_span_icon'><img src={rasms} alt="qol" width='18px' height='19px'/></span>
      <p className='postsingle_left_par'>70</p>
  </div>
</div>
  )
}

export default PostsingleIcon