
import './App.scss';
import React from "react";
import Header from './Header';
import Afisha from './pages/Afisha/Afisha.js';
import Cinemas from './pages/Cinemas/cinemas.js';
import Info from './pages/Info/info.js';
import Footer from '../src/pages/Afisha/footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
     <Router>
     <div className="App">
     <Header/>
     
      <div>
        <nav>
       
        </nav>
        <Switch>
          <Route path="/Cinemas">
            <Cinemas />
          </Route>
          <Route path="/Info">
            <Info />
          </Route>
          <Route path="/">
            <Afisha />
          </Route>
        </Switch>
      </div>
      <Footer/>
      </div>
    </Router>
      
    
  );
}



export default App;
