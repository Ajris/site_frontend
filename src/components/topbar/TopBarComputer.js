import React from "react";
import TopBarElement from "./TopBarElement";
import logo from './logo.PNG';
import TopBarLoginElement from "./TopBarLoginElement";
import {Nav, Navbar} from "react-bootstrap";

class TopBarComputer extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Navbar.Brand href="/">
                    <div>
                        <img src={logo} alt={"logo"} style={{width: '40px', height: '40px'}} className={"mx-auto"}/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <TopBarElement name="Home"/>
                        <TopBarElement name="Experience"/>
                        <TopBarElement name="Projects"/>
                        <TopBarElement name="Technologies"/>
                    </Nav>
                    <Nav>
                        <TopBarLoginElement name="Login"/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
    }
}

export default TopBarComputer;