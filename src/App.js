import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/NavBar/navbar';
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
