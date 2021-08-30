import {getPosts} from "../../services/posts.service";
import Post from "../post/Post";
import {useState,useEffect} from "react";
export  default function Posts(){
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        getPosts().then(data => setPosts([...data]))
    },[posts])
    return(
        <div>
            {
                posts.map(item => <Post key={item.id} {...item}/>)
            }
        </div>
    )
}