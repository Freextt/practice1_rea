import Character from "../character/Character";

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Nccekmvcemvemvmev,elmvkpmevmekprnvernvmevmelrvm',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Nccekmvcemvemvmev,elmvkpmevmekprnvernvmevmelrvm',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {

        name: 'Marge',
        surname: 'Simpson',
        age: 40,
        info: 'Nccekmvcemvemvmev,elmvkpmevmekprnvernvmevmelrvm',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    }
]
export default function Simpsons(){
    return (
        <div>
            {
                simpsons.map(value => <Character item={value}/>)
                    }
                </div>
    );
}