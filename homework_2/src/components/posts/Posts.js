import Post from "../post/post";
export default  function Posts({items,selectPost}){
    console.log(items);
     return (
         <div>
             {
                 items.map(value => <Post key={value.id} item={value} selectPost={selectPost}/>)
             }
         </div>
     )
}