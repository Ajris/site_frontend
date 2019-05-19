import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Home from './components/home.component'
import Projects from './components/projects.component'
import Experience from './components/experience.component'
import Technologies from './components/technologies.component'

import linkedin from './assets/linkedin-in-brands.svg'
import github from './assets/github-brands.svg'
import youtube from './assets/youtube-brands.svg'
import twitter from './assets/twitter-square-brands.svg'

import {Layout, Icon} from 'antd';
const {Header, Content, Footer} = Layout;



class App extends Component {
    constructor() {
        super();
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
        const isMobile = width < 576;

        if (!isMobile) {
            return (
                <Router>
                    <Layout className="layout">
                        <Header>
                            <nav className="navbar navbar-expand-sm bg-dark sticky-top">
                                <div className="navbar-collapse collapse justify-content-between">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/">Home</Link>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ml-auto">
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
                        <Footer style={{textAlign: 'center'}}>
                            <nav className="navbar navbar-expand-sm bg-dark">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to='//linkedin.com'>
                                            <img src={linkedin} alt="LinkedIn" height={30}/>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='//github.com'>
                                            <img src={github} alt="Github" height={30} />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='//youtube.com'>
                                            <img src={youtube} alt="YouTube" height={30}/>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='//twitter.com'>
                                            <img src={twitter} alt="Twitter" height={30}/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </Footer>
                    </Layout>
                </Router>
            );
        } else {
            return (
                <Router>
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
            )
        }
    }
}

export default App;
