const getCars = () => {
    return fetch('http://195.72.146.25//api/v1/cars')
        .then(value => value.json())
}

const newCar = (info) =>{
    return fetch('http://195.72.146.25//api/v1/cars',{
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-type': 'application/json; charset = UTF-8',
        },
    })
        .then(response => response.json())
}

const deleteCar =(id) => {
    return fetch('http://195.72.146.25//api/v1/cars' + id,{
        method: 'DELETE'
    })
}

const editCar = (info,id) =>{
    return fetch('http://195.72.146.25//api/v1/cars' + id,{
        method: 'PUT',
        body: JSON.stringify(info),
        headers: {
            'Content-type': 'application-json; Charset=UTF-8',
        }
    })
        .then(response => getCars())
}

export {getCars,newCar,deleteCar,editCar}