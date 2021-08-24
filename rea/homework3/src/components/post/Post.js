export default function Post({item,neoPost}){
    const onclick = () =>{
        neoPost(item)
    }
    return(
        <div>
            {item.id} - {item.title}
            <button onClick={onclick}>Click</button>
        </div>
    )
}