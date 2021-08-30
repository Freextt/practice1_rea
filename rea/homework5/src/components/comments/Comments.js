import {getComments} from "../../services/comments.service";
import Comment from "../comment/Comment";
import {useState,useEffect} from "react";
export default function Comments(){
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        getComments().then(data => setComments([...data]))
    },[comments])
    return(
        <div>
            {
                comments.map(item => <Comment key={item.id} {...item}/>)
            }
        </div>
    )
}