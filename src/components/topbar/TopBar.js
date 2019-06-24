import React from 'react'
import {Image, Nav, Navbar} from "react-bootstrap";
import logo from "./logo.PNG";
import TopBarElement from "./TopBarElement";
import TopBarLoginElement from "./TopBarLoginElement";
import * as Constants from "../../constants/Constants";

export default class TopBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Navbar.Brand href={Constants.HOME_URL}>
                    <div>
                        <Image roundedCircle fluid src={logo} alt={"logo"} style={{width: '40px', height: '40px'}}
                               className={"mx-auto"}/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" variant="tabs" fill justify>
                        <TopBarElement name={Constants.HOME_NAME_COMPONENT}/>
                        <TopBarElement name={Constants.EXPERIENCE_NAME_COMPONENT}/>
                        <TopBarElement name={Constants.PROJECTS_NAME_COMPONENT}/>
                        <TopBarElement name={Constants.TECHNOLOGIES_NAME_COMPONENT}/>
                    </Nav>
                    <Nav variant="tabs" fill justify>
                        <TopBarLoginElement name={Constants.LOGIN_NAME_COMPONENT}/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
    }
}