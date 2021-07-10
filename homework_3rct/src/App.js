import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
function App() {
  let switchFunction = (swt, swtSet) => {
    if (swt === 'hide'){
      swtSet('show')
    } else if (swt === 'show'){
      swtSet('hide')
    }
  }
  return (
  <Router>
  <div>
    <div><Link to={'/'}>Homepage</Link></div>
    <div><Link to={"/users"}>Users</Link></div>
    <div><Link to={'/posts'}>Posts</Link></div>
    <div><Link to={'/comments'}>Comments</Link></div>
  </div>
    <Switch>
      <Route exact path={'/'} render={() => {
        return <h1>Homepage</h1>
      }}/>

      <Route path={'/users'}>
        <h1>Users</h1>
        <Users switchFunction={switchFunction}/>
      </Route>


      <Route path={'/posts'}>
        <h1>Posts</h1>
        <Posts switchFunction={switchFunction}/>
      </Route>

      <Route path={'/comments'} >
        <h1>Comments</h1>
        <Comments/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
