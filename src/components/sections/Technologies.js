import React from 'react';
import Card from "./Card";
import {Col, Container, Row} from "react-bootstrap";

export default class Technologies extends React.Component {
    render() {
        return (
            <div className={'mb-3'}>
                <div className={'mx-4 mt-3'}>
                    <p className={'topic text-center'}>Technologies</p>
                </div>
                <Container>
                    <Row>
                        <Col style={{backgroundColor:'RED'}}>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>;
            </div>
        )
    }
}
