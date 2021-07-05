import {useEffect, useState} from "react";
import {getCommentsFromPosts} from "../../services/api";

export default function Post({items: {userId, title, body}, switcherFn}){

    let [commentsOfPosts, setCommentsOfPosts] = useState([])

    let [switcher, setSwitcher] = useState('hide')

    useEffect(() => {
        getCommentsFromPosts(userId).then(value => {
            setCommentsOfPosts(value.data)
        })
    })

    console.log(commentsOfPosts)

    return(
        <div>
            <h2>Post of User {userId}</h2>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={() => {
                switcherFn(switcher, setSwitcher)
            }
            }>Show comments</button>
            <hr/>

            {
                commentsOfPosts.map(value => {
                    return <div className={switcher} key={value.id}>
                        <h2>Comments</h2>
                        <p>name: {value.name}</p>
                        <p>email: {value.email}</p>
                        <p>comment: {value.body}</p>
                        <hr/>
                    </div>

                })
            }





        </div>
    )
}