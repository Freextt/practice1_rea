import Geo from "../geo/Geo";
export default function Address({street,suite,city,zipcode,geo}) {
      return(
          <div>
              {street} {suite} {city} {zipcode}
              <Geo
              lat={geo.lat}
              lng={geo.lng}
              />
          </div>
      )

}