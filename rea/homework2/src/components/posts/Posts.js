import Post from "./post/Post";
import {useState,useEffect} from "react";
import {getPostsOfUser} from "../../services/post.services";
 export default function Posts(){
     let [posts,setPosts] = useState([]);
     useEffect(()=>{
         getPostsOfUser().then(({data})=> setPosts([...data]));
     },[])
     return(
         <div>
             {
                 posts.map(item => <Post key={item.id} {...item}/>)
             }
         </div>
     )
 }