import React from "react";

import {Link as RouterLink} from "react-router-dom";
import {NavItem} from "react-bootstrap";
import * as Constants from "../../constants/Constants";

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
            <NavItem>
                <Link className="nav-link" to={this.state.name} style={{cursor: 'pointer'}} spy={true}
                      smooth={true} duration={500} offset={-100}>
                    <RouterLink className="top-bar-element" to={Constants.HOME_URL}>{this.state.name}</RouterLink>
                </Link>
            </NavItem>
        )
    }
}

export default TopBarElement;