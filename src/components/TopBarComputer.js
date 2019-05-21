import React, {Component} from "react";
import TopBarElement from "./TopBarElement";

class TopBarComputer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark fixed-top sticky-top">
                <div className="navbar-collapse collapse justify-content-between py-2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ml-3" style={{fontSize: 25}}>
                            <TopBarElement name="Home"/>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto mr-2">
                        <li className="nav-item">
                            <TopBarElement name="Experience"/>
                        </li>
                        <li className="nav-item">
                            <TopBarElement name="Projects"/>
                        </li>
                        <li className="nav-item">
                            <TopBarElement name="Technologies"/>
                        </li>
                    </ul>
                </div>
            </nav>)
    }
}

export default TopBarComputer;