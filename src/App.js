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
                <nav className="navbar navbar-expand-sm bg-dark sticky-top">
                    <div className="mobile-nav-toggle">
                        <div className="top-bar"/>
                        <div className="middle-bar"/>
                        <div className="bottom-bar"/>
                    </div>
                    <div className="navbar-collapse collapse justify-content-between">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/projects">Personal Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/technologies">Technologies</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/projects'} component={Projects}/>
                <Route exact path={'/experience'} component={Experience}/>
                <Route exact path={'/technologies'} component={Technologies}/>
            </Router>
        );
    }
}

export default App;
