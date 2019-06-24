import React from "react";
import {Link} from "react-router-dom";
import {NavItem} from "react-bootstrap";
import * as Constants from "../../constants/Constants";


class TopBarLoginElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <NavItem>
                <Link className="nav-link top-bar-element" to={Constants.LOGIN_URL}>{this.state.name}</Link>
            </NavItem>
        )
    }
}

export default TopBarLoginElement;