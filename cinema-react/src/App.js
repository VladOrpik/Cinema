
import './App.scss';
import React from "react";
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Header/>
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Афиша</Link>
            </li>
            <li>
              <Link to="/Кинотеатры">Кинотеатры</Link>
            </li>
            <li>
              <Link to="/Инфо">Инфо</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Кинотеатры">
            <Кинотеатры />
          </Route>
          <Route path="/Инфо">
            <Инфо />
          </Route>
          <Route path="/">
            <Афиша />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
function Афиша() {
  return <h2>Афиша</h2>;
}

function Кинотеатры() {
  return <h2>Кинотеатры</h2>;
}

function Инфо() {
  return <h2>Кинотеатры</h2>;
}

export default App;
