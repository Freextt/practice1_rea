export default  function Character({image, cName}){
    return(
        <div>
             <h2>{cName}</h2>
            <img src={image} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi assumenda consequuntur distinctio exercitationem mollitia non reiciendis ullam voluptate voluptatem. Esse facere ipsum libero neque odit vel voluptas! Neque, obcaecati.</p>
        </div>
    )
}