import {useState,useEffect} from "react";
import {getPostsOfUser, getUsers} from "../../services/user.service";
import User from "../user/User";

export default function Users() {
    const [users,setUsers] = useState([])
    const [user,setUser] = useState(null)
    const [postsOfUser,setPostsOfUser] = useState(null)
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[])

    const neoUser = (u) => {
        setUser({...u})
        getPostsOfUser(u.id).then(value =>setPostsOfUser([...value]))
    }
    return(
        <div className={'wrap'}>

            <div className={'users-box'}>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        chooseUser={neoUser}
                    /> )
                }

            </div>

            {
                user &&  <div className={'neo-one'}>
                    {user.name}
                </div>}

            {
                postsOfUser &&  <div className={'neo-two'}>
                    {
                        postsOfUser.map(value => {
                            return <div >{value.title} <hr/></div>
                        })
                    }

                </div>
            }
        </div>
    )
}
