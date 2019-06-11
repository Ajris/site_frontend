import React from "react";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            footer: props.footer
        };
        this.lastTitle = props.title;
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseNotHover = this.handleMouseNotHover.bind(this);
    }

    handleMouseHover() {
        this.setState({title:'TYTULIK'});
    }

    handleMouseNotHover(){
        this.setState({title: this.lastTitle})
    }

    render() {
        return (
            <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseNotHover} className="card text-white bg-dark">
                <div className="card-body">
                    <h5 className="card-title">{this.state.title}</h5>
                    <p className="card-text">{this.state.text}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{this.state.footer}</small>
                </div>
            </div>
        );
    }
}