
import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../services/api";
export default function Users({switchFunction}){

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data)
        })
    }, [])


    console.log(users)

    return(

        <div>
            {
                users.map((value => {
                    return <User items={value} switchFunction={switchFunction}/>
                }))
            }


        </div>
    )
}