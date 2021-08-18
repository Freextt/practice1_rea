import axios from "axios";

let config = { baseUrl:'https://jsonplaceholder.typicode.com/comments'};
let axiosInstance = axios.create(config);

let getCommentsOfUser = () =>{
    return axiosInstance.get('');
}
export {getCommentsOfUser};