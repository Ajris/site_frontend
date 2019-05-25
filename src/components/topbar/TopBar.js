import React from 'react'
import TopBarMobile from "./TopBarMobile";
import TopBarComputer from "./TopBarComputer";

export default class TopBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

    render() {
        const {width} = this.state;
        const isMobileMode = width < 576;

        return(
            isMobileMode ? <TopBarMobile/> : <TopBarComputer/>
        )
    }
}