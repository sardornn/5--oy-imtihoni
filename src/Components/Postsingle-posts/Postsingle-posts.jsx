import { useContext} from "react"
import {Link} from 'react-router-dom'
import { PostsContext } from "../../Context/PostContext";
import React from 'react'
import Time from './Img/time.svg'

const PostsinglePosts = () => {
    const {posts} = useContext(PostsContext)
  return (
    <>
    <h2 className='postsingle_heading'>More like this</h2>
   
    <ul className="postlist">
              {  posts.slice(0, 3).map((post) => {
                    return(  
                        <li className="postsitem" key ={post.id}>
                        <Link className="postsitem_link" to={`/${post.id}`}>
                            <span className="post_span_data">September 24.2020</span>
                        <h4 className="post_item_heading">{post.title}</h4>
                        {/* <p>{post.body}</p> */}
                        <span className="post_span_time"> <img src={Time} alt="logoFace" />  3 minutes read</span>
                       
                        </Link>
                    </li>
                   
                    )
                })}
               
            </ul>
            </>
  )
}

export default PostsinglePosts