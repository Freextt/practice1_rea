import axios from "axios";

let axiosInstance = {
    baseURL:'https://jsonplaceholder.typicode.com'
}
const data = axios.create(axiosInstance);



const getUsers = () => {
    return data('/users')
}

const getPosts = () => {
    return data('/posts')
}

const getUsersPosts = (id) => {
    return data('/users/' + id + '/posts')
}


const getCommentsFromPosts = (id) =>{
    return data('/posts/' + id + '/comments')
}



const getComments = () => {
    return data('/comments')
};

export {getUsers, getPosts, getUsersPosts, getComments, getCommentsFromPosts};