import {useEffect, useState} from "react";

export default  function Posts(){
     let[posts, setPosts] = useState([]);
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            },)
    },[])
    return(
        <div>
            {
                posts.map(value => {return <div>{value.title}-{value.body}</div>})
            }
        </div>
    );
}