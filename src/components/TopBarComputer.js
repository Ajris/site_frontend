import React, {Component} from "react";

const Link = require('react-scroll').Link;

class TopBarComputer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark fixed-top sticky-top">
                <div className="navbar-collapse collapse justify-content-between py-2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ml-3" style={{fontSize: 25}}>
                            <Link className="nav-link text-white" activeClass="active" to="home" spy={true}
                                  smooth={true} duration={500} offset={-100}>Home</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto mr-2">
                        <li className="nav-item">
                            <Link className="nav-link text-white" activeClass="active" to="experience" spy={true}
                                  smooth={true} duration={500} offset={-100}>Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" activeClass="active" to="projects" spy={true}
                                  smooth={true} duration={500} offset={-100}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" activeClass="active" to="technologies" spy={true}
                                  smooth={true} duration={500} offset={-100}>Technologies</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default TopBarComputer;