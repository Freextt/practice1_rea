import {useEffect,useState} from "react";
import User from "./user/User";
import {getUsers} from "../../services/user.services";
export default function Users(){
    let [users,setUsers] = useState([]);
useEffect(()=>{
    getUsers().then(({data})=>setUsers([...data]));
},[])
    return (
        <div>
            {
                users.map(item => <User key={item.id} {...item}/>)
            }
        </div>
    )
}