import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import SingleBlog from "./screens/SingleBlog/SingleBlog";
import Nav from "./components/Nav/Nav";
import AddBlog from "./screens/AddBlog/AddBlog";

function App() {
  return (
    <div className="App">
      <Switch>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={SingleBlog} />
        <Route exact path="/addpost" component={AddBlog} />
      </Switch>
    </div>
  );
}

export default App;
