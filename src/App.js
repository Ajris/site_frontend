import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/sections/Home'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Technologies from './components/sections/Technologies'
import FooterLinks from "./components/footer/FooterLinks";
import TopBarComputer from "./components/topbar/TopBarComputer";
import TopBarMobile from "./components/topbar/TopBarMobile";

import Background from "../src/assets/background.jpg"

const Element = require('react-scroll').Element;

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
            <div style={{backgroundImage: `url(${Background})`}}>
                {isMobileMode ? <TopBarMobile/> : <TopBarComputer/>}
                <Element name="Home"><Home/></Element>
                <Element name="Experience"><Experience/></Element>
                <Element name="Projects"><Projects/></Element>
                <Element name="Technologies"><Technologies/></Element>
                <FooterLinks/>
            </div>
        );
    }
}

export default App;