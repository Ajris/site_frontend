import React, {Component} from "react";

const Link = require('react-scroll').Link;

class TopBarElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            active: {
                border: '1px solid green'
            },
        }
    }

    handleSetActive() {
        this.setState({
            active: {
                border: '5px solid red'
            }
        })
    };

    handleSetDeactivate() {
        this.setState({
                active: {
                    border: '1px solid green'
                }
            }
        )
    };

    render() {
        return (
            <Link className="nav-link text-white" activeClass="active" to={this.state.name} spy={true}
                  smooth={true} duration={500} offset={-70} style={this.state.active}
                  onSetActive={() => {
                      this.handleSetActive();
                  }}
                  onSetInactive={() => {
                      this.handleSetDeactivate();
                  }}>{this.state.name}</Link>
        )
    }
}

export default TopBarElement;