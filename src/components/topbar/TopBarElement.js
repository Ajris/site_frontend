import React from "react";

import {NavItem} from "react-bootstrap";
import '../../App.css';

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
                    {this.state.name}
                </NavItem>
            </Link>
        )
    }
}

export default TopBarElement;