import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import FooterLinks from "./components/FooterLinks";
import TopBarComputer from "./components/TopBarComputer";
import TopBarMobile from "./components/TopBarMobile";

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
            <div>
                {isMobileMode ? <TopBarMobile/> : <TopBarComputer/>}
                <Element name="home"><Home/></Element>
                <Element name="experience"><Experience/></Element>
                <Element name="projects"><Projects/></Element>
                <Element name="technologies"><Technologies/></Element>
                <FooterLinks/>
            </div>
        );
    }
}

export default App;