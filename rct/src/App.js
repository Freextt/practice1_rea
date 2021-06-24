//import logo from './logo.svg';
import './App.css';
import Simpsons  from './components/simpsons/Simpsons';
import Posts from './components/posts/Posts'
import Comment from "./components/comments/Comment";
function App() {

  return (
    <div>
        <Simpsons/>
        <Posts/>
        <Comment/>
    </div>
  );
}

export default App;
