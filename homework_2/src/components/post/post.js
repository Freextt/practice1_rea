
export  default function Post({item, selectPost}){
    return (
        <div>
            {item.id} - {item.title} - <button onClick={()=>{
                selectPost(item.id);
            }
        }>Click here</button>
        </div>
    );
}