import React, {Component} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/sections/Home'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Technologies from './components/sections/Technologies'
import FooterLinks from "./components/footer/FooterLinks";

import Background from "../src/assets/background.jpg"

const Element = require('react-scroll').Element;

class App extends Component {
    render() {

        return (
            <div style={{backgroundImage: `url(${Background})`}}>
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