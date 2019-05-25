import React from 'react';
import Card from './Card';
import '../../App.css';

export default class Home extends React.Component {
    render() {
        return (
            <div>
               <div className={'px-4 py-3'}>
                    <p className={'topic text-center'}>Home Information</p>
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