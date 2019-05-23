import React from "react";
import {Link} from "react-router-dom";

class TopBarLoginElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <Link className="nav-link" to="/login">{this.state.name}</Link>
        )
    }
}

export default TopBarLoginElement;