import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Home} from "./components/Home/Home";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Home}/>

        </Switch>
      </div>
  );
}

export default App;
