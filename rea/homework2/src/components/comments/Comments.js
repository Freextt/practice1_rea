import Comment from "./Comment/Comment";
import {useState,useEffect} from "react";
import {getCommentsOfUser} from "../../services/comment.services";

export default function Comments(){
    let [comments,setComments] = useState([]);
    useEffect(()=>{
        getCommentsOfUser().then(({data})=>setComments([...data]))
    },[])
    return(
        <div>
            {
              comments.map(item => <Comment key={item.id} {...item}/>)
            }
        </div>
    )
}