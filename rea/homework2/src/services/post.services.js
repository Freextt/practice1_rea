import axios from "axios";

let config = { baseURL: 'https://jsonplaceholder.typicode.com/posts'};
let axiosInstance = axios.create(config);

let getPostsOfUser = () =>{
    return axiosInstance.get('');
}
export {getPostsOfUser}