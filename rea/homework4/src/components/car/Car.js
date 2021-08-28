export default function Car({items:{id,model,price,year},deleteCar,editCar}){
    return(
        <div>
            <h2>{id} - {model} - {price} - {year}</h2>
            <button onClick={deleteCar(id)}>Delete</button>
            <button onClick={editCar(id)}>Edit</button>
        </div>
    )
}