import React from 'react'
import {Image, Nav, Navbar} from "react-bootstrap";
import logo from "./logo.PNG";
import TopBarElement from "./TopBarElement";
import * as Constants from "../../constants/Constants";

export default class TopBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Navbar.Brand href={Constants.HOME_URL}>
                    <div>
                        <Image roundedCircle fluid src={logo} alt={"logo"} style={{width: '50px', height: '50px'}}
                               className={"mx-auto"}/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="mr-auto container bordersOut">
                        <TopBarElement name={Constants.HOME_NAME_COMPONENT} />
                        <TopBarElement name={Constants.PROJECTS_NAME_COMPONENT}/>
                        <TopBarElement name={Constants.TECHNOLOGIES_NAME_COMPONENT} />
                        <TopBarElement name={Constants.BLOG_NAME_COMPONENT} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
    }
}