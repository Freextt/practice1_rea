import {useEffect, useState} from "react";
import {getUsersPosts} from "../services/api";



export default function User({items:{id, name}, switchFunction}){



    let [usersPosts, setUsersPosts] = useState([]);
    let [switcher, setSwitcher] = useState('hide');

    useEffect(() => {
        getUsersPosts(id).then(value => {
            setUsersPosts(value.data);
        })
    }, [])



    return(
        <div>
            {id} - {name}


            <button onClick={()=> {
                switchFunction(switcher, setSwitcher)
            }
            }>Show posts</button>



            {

                usersPosts.map(value => {
                    return <div className={switcher}>
                        <h2>Post of User {value.userId}</h2>
                        <p>{value.title}</p>
                        <p>{value.body}</p>
                        <hr/>
                    </div>

                })
            }



        </div>
    )
}