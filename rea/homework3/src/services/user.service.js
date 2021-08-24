const baseUrl = 'https://jsonplaceholder.typicode.com/'

const getUsers = () => {
    return fetch(baseUrl + 'users')
        .then(value => value.json())
}
const getPostsOfUser = (id) => {
    return fetch(baseUrl + 'users/' + id + '/posts')
        .then(value => value.json())
}
export {getUsers,getPostsOfUser,baseUrl}