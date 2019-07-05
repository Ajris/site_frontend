import React, {Component} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Technologies from './components/sections/Technologies'
import FooterLinks from "./components/footer/FooterLinks";

import Background from "../src/assets/bright-design.jpg"

const Element = require('react-scroll').Element;

class App extends Component {
    render() {
        return (
            <div className="background" style={{backgroundImage: `url(${Background})`}}>
                <Element name="About"><About/></Element>
                <Element name="Projects"><Projects/></Element>
                <Element name="Technologies"><Technologies/></Element>
                <FooterLinks/>
            </div>
        );
    }
}

export default App;