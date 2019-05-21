import React from "react";
import TopBarElement from "./TopBarElement";

class TopBarComputer extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark indigo navbar-expand bg-light fixed-top sticky-top">
                <div className="navbar-brand justify-content-between">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <TopBarElement name="Home"/>
                        </li>
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