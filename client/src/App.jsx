import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home'
import AddBlog from './screens/AddBlog/AddBlog'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route expct path='/addblog' component={AddBlog} />
      </Switch>
    </div>
  );
}

export default App;
