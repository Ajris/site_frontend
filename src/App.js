import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Home from './components/home.component'
import Projects from './components/projects.component'
import Experience from './components/experience.component'
import Technologies from './components/technologies.component'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <nav className="navbar navbar-expand-sm navbar-brand bg-light">
              <div className="collapse.navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/projects">Personal Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/experience">Experience</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technologies">Technologies</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/projects'} component={Projects}/>
            <Route exact path={'/experience'} component={Experience}/>
            <Route exact path={'/technologies'} component={Technologies}/>

          </div>
        </Router>
    );
  }
}

export default App;
