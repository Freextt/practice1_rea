export default function User({item,neoUser}){
    const onclick = () => {
        neoUser(item)
    }
    return(
        <div>
            {item.id} - {item.name}
            <button onClick={onclick}>Click</button>
        </div>
    )
}