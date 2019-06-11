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
                <div className="card-lines">
                    <div className="card-deck">
                        <Card title="HOME 1" text="TEXT 1" footer="footer 1"/>
                        <Card title="HOME 1" text="TEXT 1" footer="footer 1"/>
                        <Card title="HOME 1" text="TEXT 1" footer="footer 1"/>
                    </div>
                    <div className="card-deck">
                        <Card title="HOME 1" text="TEXT 1" footer="footer 1"/>
                        <Card title="HOME 1" text="TEXT 1" footer="footer 1"/>
                        <Card title="HOME 1" text="TEXT 1" footer="footer 1"/>
                    </div>
                </div>
            </div>
        )
    }
}
