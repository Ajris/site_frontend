import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import FooterLinks from "./components/FooterLinks";
import TopBarComputer from "./components/TopBarComputer";
import TopBarMobile from "./components/TopBarMobile";

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

        return (
            <Router>
                {isMobileMode ? <TopBarMobile/> : <TopBarComputer/>}
                <Home/>
                <Experience/>
                <Projects/>
                <Technologies/>
                <FooterLinks/>
            </Router>
        );
    }
}

export default App;