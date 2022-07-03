import { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import './PostSingle.css';
import postHeadingFoto from './Img/postsingleimg.png';

import PostsingleIcon from '../../Components/Postsingle-icon/Postsingle-icon';
import PostsinglePosts from '../../Components/Postsingle-posts/Postsingle-posts';


export const PostSingle = () =>{
    const [postSingle, setPostSingle] = useState([])
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect ( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then((res) => res.json())
        .then((data) => setPostSingle(data))
    }, [params])
    useEffect(()=> { if(isNaN(params.postId)){
        return navigate('error')
    }})
    return(
        <div className='postsingle_page'>
     
        <PostsingleIcon/>
      <div className='postsingle-right'>
      <div className='postsingle'>
            <h2 className='pistsingle_heading'>User interface</h2>
        <h2 className='postsingle_title'>{postSingle.title}</h2>
        {/* <p>{postSingle.body}</p> */}
        <span className='postsingle_item_span'>    
        <span  className="postsingle_span_data">September 24.2020</span>
        <span className="postsingle_span_time">   3 minutes read</span></span>
        </div>
        
        <img className='post_heading_img' src={postHeadingFoto} alt="pege foto postsingle"  />
        <h3 className='postsingle_lesson_heading'>Lessons Learnt: Best Practice</h3>
        <ul className='post_lesson_list'>
            <li className='post_lesson_item' >Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.</li>
            <li className='post_lesson_item'> Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.</li>
        </ul>
     
        <PostsinglePosts/>
      </div>
        </div>
        )
    }
    