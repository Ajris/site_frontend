import React from "react";
import Card from "react-bootstrap/Card";

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            footer: props.footer
        };
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text>{this.state.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{this.state.footer}</small>
                </Card.Footer>
            </Card>
        );
    }
}