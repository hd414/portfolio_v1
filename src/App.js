import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar.component';
import Sidenav from './components/Sidenav/sidenav.component';
import Home from './pages/Home/home.component';
import About from './pages/About/about';
import Contact from './pages/contact/contact';
import { Param } from './Particle.param';
import Particles from 'react-particles-js';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';


function App() {
  return (
    <div className="App">

      <Navbar />
      <Sidenav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      {/* <div style={{zIndex:"-10",width:"90vw",height:"90vh"}}>
      <Particles params={Param} />
      </div> */}


    </div>
  );
}

export default App;
