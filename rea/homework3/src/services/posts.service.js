import {baseUrl} from "./user.service";
const getPosts = () =>{
    return fetch(baseUrl + 'posts')
        .then(value => value.json())
}
 const getCommentsOfPosts = (id)=>{
    return fetch(baseUrl + 'posts/' + id + '/comments')
        .then(value => value.json())
}
export {getPosts,getCommentsOfPosts}