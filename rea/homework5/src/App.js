//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
function App() {
  return (
          <Router>
        <div>
            <Link to={'/'}>Default page</Link>
            <br/>
          <Link to={'/users-page'}>Users page</Link>
            <br/>
            <Link to={'/posts-page'}>Posts-page</Link>
            <br/>
            <Link to={'/comments-page'}>Comments-page</Link>

            <Switch>
             <Route path={'/users-page'}>
                <Users/>
             </Route>
             <Route path={'/posts-page'}>
                <Posts/>
             </Route>
             <Route path={'/comments-page'}>
                <Comments/>
             </Route>
            </Switch>
        </div>
              </Router>
  );
}

export default App;
