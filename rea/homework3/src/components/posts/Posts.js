
import {useEffect, useState} from "react";
import {getPosts,getCommentsOfPosts} from "../../services/posts.service";
//import {baseUrl} from "../../services/user.service";
import Post from "../post/Post";
export default function Posts(){

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)

    const neoPost = (p) => {
        setPost({...p})

        getCommentsOfPosts(p.id).then(value => setComments(value))
    }
    console.log(post)

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])



    const postPerPage = posts.slice(0, 10)




    return(
        <div className={'flex'}>

            <div className={'column-1'}>
                {

                    postPerPage.map(value => {
                        return <Post
                            key={value.id}
                            item={value}
                            neoPost={neoPost}
                        />
                    })
                }



            </div>


            { post &&
            <div className={'column-2'}>
                {post.body}
            </div>
            }


            {comments &&

            <div className={'column-3'}>
                {
                    comments.map(value => {
                        return <div>{value.name} <hr/></div>
                    })
                }
            </div>

            }

        </div>
    )
}