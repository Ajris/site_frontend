import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import FooterLinks from "./components/FooterLinks";
import TopBarComputer from "./components/TopBarComputer";
import TopBarMobile from "./components/TopBarMobile";

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
                        <TopBarComputer/>

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
                        <TopBarMobile/>

                        <Content>
                            <Route exact path={'/'} component={Home}/>
                            <Route exact path={'/projects'} component={Projects}/>
                            <Route exact path={'/experience'} component={Experience}/>
                            <Route exact path={'/technologies'} component={Technologies}/>
                        </Content>

                        <FooterLinks/>
                    </Layout>
                </Router>
            )
        }
    }
}

export default App;