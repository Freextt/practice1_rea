import Geo from "../geo/Geo";
export default function Address({street,suite,city,zipcode,geo}){
    return(
      <div>
          Address:
          <p>{street} {suite} {city} {zipcode}</p>
          <Geo {...geo}/>
      </div>
   )
}