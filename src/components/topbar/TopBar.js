import React from 'react'
import {Image, Nav, Navbar} from "react-bootstrap";
import logo from "./logo.PNG";
import TopBarElement from "./TopBarElement";
import TopBarLoginElement from "./TopBarLoginElement";

export default class TopBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Navbar.Brand href="/">
                    <div>
                        <Image roundedCircle fluid src={logo} alt={"logo"} style={{width: '40px', height: '40px'}}
                               className={"mx-auto"}/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" variant="tabs" fill justify>
                        <TopBarElement name="Home"/>
                        <TopBarElement name="Experience"/>
                        <TopBarElement name="Projects"/>
                        <TopBarElement name="Technologies"/>
                    </Nav>
                    <Nav variant="tabs" fill justify>
                        <TopBarLoginElement name="Login"/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
    }
}