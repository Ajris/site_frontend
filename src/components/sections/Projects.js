import React from 'react';
import Card from "./Card";

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <div className={'mx-4 my-3'}>
                    <p className={'topic text-center'}>Projects</p>
                </div>
                <div className="card-lines">
                    <div className="card-deck">
                        <Card title="Project 1" text="TEXT 1" footer="footer 1"/>
                        <Card title="Project 1" text="TEXT 1" footer="footer 1"/>
                        <Card title="Project 1" text="TEXT 1" footer="footer 1"/>
                    </div>
                    <div className="card-deck">
                        <Card title="Project 1" text="TEXT 1" footer="footer 1"/>
                        <Card title="Project 1" text="TEXT 1" footer="footer 1"/>
                        <Card title="Project 1" text="TEXT 1" footer="footer 1"/>
                    </div>
                </div>
            </div>
        )
    }
}