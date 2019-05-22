import React from "react";

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
            <Link className="nav-link" activeClass="active" to={this.state.name} spy={true}
                  smooth={true} duration={500} offset={-70}>{this.state.name}</Link>
        )
    }
}

export default TopBarElement;