import React from "react";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            footer: props.footer
        }
    }

    render() {
        return (
            <div className="card text-white bg-dark">
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