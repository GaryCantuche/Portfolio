import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/NavBar/navbar';
import Home from './pages/home/home';
import Footer from './Components/NavBar/footer';
import Projects from './pages/projects/projects';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route exact path="/projects" >
          <Projects/>
        </Route>
        <Route exact path="/projects/phplibrary" >
          
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
