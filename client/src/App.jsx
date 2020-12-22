import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import SingleBlog from "./screens/SingleBlog/SingleBlog";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Switch>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={SingleBlog} />
      </Switch>
    </div>
  );
}

export default App;
