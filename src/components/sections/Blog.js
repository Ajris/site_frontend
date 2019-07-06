import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import ItemCard from "./ItemCard";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/blog")
            .then(res => res.json())
            .then((result) => {
                let i = 0;
                let cards = result.map((item) =>
                    <ItemCard key={i++} title={item.name} text={item.email} footer={"footer"}/>
                );
                this.setState({cards:cards});
            });

    }

    render() {
        return (
            <div>
                <div className={'mx-4 my-3'}>
                    <p className={'topic text-center'}>Blog</p>
                </div>
                <CardDeck>
                    {this.state.cards}
                </CardDeck>
            </div>
        )
    }
}