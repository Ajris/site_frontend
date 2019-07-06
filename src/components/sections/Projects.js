import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import ItemCard from "./ItemCard";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((result) => {
                let cards = result.map((item) =>
                    <ItemCard title={item.name} text={item.email} footer={"footer"}/>
                );
                this.setState({cards:cards});
            });

    }

    render() {
        return (
            <div>
                <div className={'mx-4 my-3'}>
                    <p className={'topic text-center'}>Projects</p>
                </div>
                <CardDeck>
                    {this.state.cards}
                </CardDeck>
            </div>
        )
    }
}