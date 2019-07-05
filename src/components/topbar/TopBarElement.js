import React from "react";

import {Link as RouterLink} from "react-router-dom";
import {NavItem} from "react-bootstrap";
import * as Constants from "../../constants/Constants";
import '../../App.css';
import Container from "react-bootstrap/Container";

const Link = require('react-scroll/modules').Link;

class TopBarElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <Link className="nav-link" to={this.state.name} spy={true}
                  smooth={true} duration={500} offset={-100}>
                <NavItem>
                    <RouterLink className="top-bar-element" to={Constants.HOME_URL}>{this.state.name}</RouterLink>
                </NavItem>
            </Link>
        )
    }
}

export default TopBarElement;