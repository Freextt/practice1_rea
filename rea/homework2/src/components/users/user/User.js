import Address from "../../address/Address";
import Company from "../../company/Company";
export default function User({id,name,username,email,phone,website,address,company}){
    return(
        <div>
            {id} {name} {username} {email} {phone} {website};
            <Address
                street={address.street}
                suite={address.suite}
                city = {address.city}
                zipcode={address.zipcode}
                geo= {address.geo}
            />
            <Company
              name={company.name}
              catchPhrase={company.catchPhrase}
              bs={company.bs}
            />
        </div>
    )
}