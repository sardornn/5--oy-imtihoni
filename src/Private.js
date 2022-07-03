import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import {Header} from './Components/Header/Header';
import { PostSingle } from './Pages/PostSingle/PostSingle';
import All from './Pages/All/All';
import Error from './Pages/Error/Error';
import { useEffect, useContext} from "react"
import { PostsContext } from "../src/Context/PostContext";


export const Private = ()=>{
    const { setPosts} = useContext(PostsContext)

    useEffect (() => {
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json()) 
        .then((data) => setPosts(data))
     
    },[setPosts]);

    return(
        <div className='container'>
            <Header/>
           
       < Routes>
       <Route path='/' element={<All/>}/>
       <Route path="/:postId" element={<PostSingle/>}/>
       <Route path='*' element={<Error/>}/>
       </Routes>
       <Footer/>
        </div>
    )
    }