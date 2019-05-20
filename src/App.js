import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import FooterLinks from "./components/FooterLinks";

const Layout = require('antd').Layout;
const {Header, Content} = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

    render() {
        const {width} = this.state;
        const isMobileMode = width < 576;

        if (!isMobileMode) {
            return (
                <Router>
                    <Layout className="layout">
                        <Header>
                            <nav className="navbar navbar-expand-sm bg-dark sticky-top">
                                <div className="navbar-collapse collapse justify-content-between py-2">
                                    <ul className="navbar-nav">
                                        <li className="nav-item ml-3" style={{fontSize: 25}}>
                                            <Link className="nav-link text-white" to="/">Home</Link>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ml-auto mr-2">
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/projects">Personal
                                                Projects</Link>
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
                        </Header>

                        <Content>
                            <Route exact path={'/'} component={Home}/>
                            <Route exact path={'/projects'} component={Projects}/>
                            <Route exact path={'/experience'} component={Experience}/>
                            <Route exact path={'/technologies'} component={Technologies}/>
                        </Content>

                        <FooterLinks/>
                    </Layout>
                </Router>
            );
        } else {
            return (
                <Router>
                    <Layout className="layout">
                        <Header>
                            <nav className="navbar navbar-dark navbar-expand-sm bg-dark sticky-top">
                                <Link className="nav-link text-white" to="/">Home</Link>
                                <button type="button" className="navbar-toggler collapsed" data-toggle="collapse"
                                        data-target=".toggle-content" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation ">
                                    <span className="navbar-toggler-icon"/>
                                </button>

                                <div className="navbar-collapse collapse toggle-content">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link text-white" to="/projects">Personal
                                                Projects</Link>
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
                        </Header>
                    </Layout>

                    <Content>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/projects'} component={Projects}/>
                        <Route exact path={'/experience'} component={Experience}/>
                        <Route exact path={'/technologies'} component={Technologies}/>
                    </Content>

                    <FooterLinks/>
                </Router>
            )
        }
    }
}

export default App;