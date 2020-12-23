import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import SingleBlog from "./screens/SingleBlog/SingleBlog";
import AddBlog from "./screens/AddBlog/AddBlog";
import Nav from "./components/Nav/Nav";
import PostEdit from "./screens/PostEdit/PostEdit";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={SingleBlog} />
<<<<<<< HEAD
        <Route exact path="/add-posts" component={AddBlog} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
=======
        <Route path="/add-posts" component={AddBlog} />
>>>>>>> ef52cb2438b229c1f32f23e84aa8f91e5680dc84
      </Switch>
    </div>
  );
}

export default App;
