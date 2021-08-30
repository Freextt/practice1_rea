import {getUsers} from "../../services/users.service";
import User from "../user/User";
import {useState,useEffect} from "react";
export  default function Users(){
    let [users,setUsers] = useState([])
    useEffect(()=>{
        getUsers().then(data => setUsers([...data]))
    },[users])
    return(
        <div>
            {
                users.map(item => <User key={item.id} {...item}/>)
            }
        </div>
    )
}
