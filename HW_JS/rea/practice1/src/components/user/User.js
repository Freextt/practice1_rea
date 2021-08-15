import Address from "../address/Address";
import Company from "../company/Company";
export default function User({item:{name,username,email,address,company}}) {
    return(
        <div>
            <h2>{name} {username} {email}</h2>
            <Address {...address}/>
            <Company {...company}/>
        </div>
    )
}