import {useEffect, useState} from "react";

export default function Comment(){
      let [comments, setComments] = useState([]);
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            },)
    },[])
    return(
        <div>
            {
               comments.map(value => {return <div>{value.name} - {value.body}</div>})
            }
        </div>
    );
}