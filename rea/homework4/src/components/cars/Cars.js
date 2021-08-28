import Car from "../car/Car";
import {useEffect,useState} from "react";
import {newCar,getCars,editCar,deleteCar} from "../../services/cars.service";

export default function Cars(){
    const currentYear = new Date().getFullYear()
    let [cars,setCars] = useState([]);
    let [model,setModel] = useState('');
    let [price,setPrice] = useState('');
    let [year,setYear] = useState('');
    const  submit = (e) => {
        e.preventDefault();
        newCar({
            model: model,
            price: price,
            year:year
        }).then(value => setCars([...cars,value]))
        setModel('')
        setPrice('')
        setYear('')
    }
    useEffect(()=>{
        getCars().then(value => setCars([...value]))
    },[])
    let onModelChange = (e) => {
        if  (e.target.value.length >= 1 && e.target.value.length <= 20 && !(e.target.value.indexOf(' ')  >= 0) ){
            setModel(e.target.value)
        }

        else{
            e.preventDefault()
            console.log('bad')
        }
    }
    let onPriceChange = (e) => {
        if (e.target.value >= 0){
            setPrice(e.target.value)
        } else{
            e.preventDefault()
        }
    }
    let onYearChange = (e) => {
        if ( e.target.value < currentYear + 1 ){
            setYear(e.target.value)
        }
        else{
            e.preventDefault()
        }
    }



    const deleteCar = (id) => {
        deleteCar(id)
        setCars( cars.filter(value => value.id !== id))


    }


    const editCar = (id) => {
        editCar({
            model: model,
            price: price,
            year: year}, id).then(value => setCars(value))
            .catch(reason => console.error(reason))

    }

    console.log(cars)

    return(
        <div>
            <form onSubmit={submit}>
                <input type="text" name={'model'} value={model} onChange={onModelChange}/>
                <input type="text" name={'price'} value={price} onChange={onPriceChange}/>
                <input type="text" name={'year'} value={year} onChange={onYearChange}/>
                <input type="submit" value={'save'}/>
            </form>
            {
                cars.map(item => {
                    return <Car key={item.id} items={item} deleteCar={deleteCar} editCar={editCar}/>
                })
            }
    </div>
    )
}