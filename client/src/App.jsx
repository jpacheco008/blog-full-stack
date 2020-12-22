import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import SingleBlog from "./screens/SingleBlog/SingleBlog";
import AddBlog from './screens/AddBlog/AddBlog'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={SingleBlog} />
        <Route path="/add-posts" component={AddBlog} />
      </Switch>
    </div>
  );
}

export default App;
