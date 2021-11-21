import './App.css';
import {Route, Switch} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Contact} from "./components/Contact/Contact";
import {MyMap} from "./components/MyMap/MyMap";

function App() {
  return (
      <div className="App">
          <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/kontakt" exact component={Contact}/>
          <Route path="/mapa" exact component={MyMap}/>
        </Switch>
          <Footer/>
      </div>
  );
}

export default App;
