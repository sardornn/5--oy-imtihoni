import {  useState , useContext} from "react"
import {Link} from 'react-router-dom'
import './Posts.css'
import Time from './Img/time.svg'
import { PostsContext } from "../../Context/PostContext";

export const Posts =() => {
    const [numberFirst, setNmberFirst]=useState(0)
    const [numberEnd, setNmberEnd]=useState(10)
    const {posts} = useContext(PostsContext)
 

    const prevPage=()=>{
      
      if(numberFirst > 9){
        setNmberFirst(numberFirst -10)
        setNmberEnd(numberEnd - 10)
    }
    }
    const nextPage=()=>{
       
   if(numberEnd < 91){
    setNmberFirst(numberFirst +10)
    setNmberEnd(numberEnd + 10)
   
   }
    
     }
 
    return (
        <div>
            <h2 className=" posts_heading">Recent Posts</h2>
            <ul className="postlist">
              {  posts.slice(numberFirst, numberEnd).map((post) => {
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
            <div className="button_page_posts">
            <button className="button_pagenation " disabled={ numberFirst <10 ? true : false}  onClick={prevPage}>Prev</button>
            <button className="button_pagenation " disabled={ numberEnd >90 ? true : false} onClick={nextPage}>Next</button>
            </div>

            </div>
    )
}