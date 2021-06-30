import {useEffect, useState} from "react";
import {getPosts,getPost} from "./components/services/API";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/post_details/PostDetails";
function App() {
  let [posts, setPosts] = useState([]);
  let [postDetails,setPostDetails] = useState(null);
  useEffect(()=>{
     getPosts().then(response =>{
       setPosts(response.data);
     });
  }, []);
  function selectPost(id){
     console.log(id);
     getPost(id).then(({data}) => setPostDetails(data));
  }
  return (
    <div>
      <Posts items={posts} selectPost={selectPost}/>
        <hr/>
        {
            postDetails && <PostDetails item={postDetails}/>
        }
    </div>
  );
}

export default App;
