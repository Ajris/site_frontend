import React from 'react';
import linkedIn from "../../assets/icons/linkedin_icon.png";
import github from "../../assets/icons/github_icon.png";
import youtube from "../../assets/icons/youtube_icon.png";
import twitter from "../../assets/icons/twitter_icon.png";
import mail from "../../assets/icons/mail_icon.png";
import * as Constants from "../../constants/Constants";

const Layout = require('antd/lib/index').Layout;
const Footer = Layout;

class FooterLinks extends React.Component {
    render() {
        return (
            <Footer>
                <nav className="footer navbar navbar-expand bg-dark">
                    <div className="align-items-center mx-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" rel="noopener noreferrer"
                                   href={Constants.LINKEDIN_LINK}>
                                    <img src={linkedIn} alt="LinkedIn" height={25}/>
                                </a>
                            </li>
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" rel="noopener noreferrer" href={Constants.GITHUB_LINK}>
                                    <img src={github} alt="Github" height={25}/>
                                </a>
                            </li>
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" rel="noopener noreferrer"
                                   href={Constants.YOUTUBE_LINK}>
                                    <img src={youtube} alt="YouTube" height={25}/>
                                </a>
                            </li>
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" rel="noopener noreferrer" href={Constants.TWITTER_LINK}>
                                    <img src={twitter} alt="Twitter" height={25}/>
                                </a>
                            </li>
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" rel="noopener noreferrer" href={Constants.MAIL_LINK}>
                                    <img src={mail} alt="Mail" height={25}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Footer>
        )
    }
}

export default FooterLinks;