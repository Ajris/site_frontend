import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import ItemCard from "./ItemCard";
import {getAllBlogs} from "../../utils/APIUtils";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        getAllBlogs()
            .then((result) => {
                let i = 0;
                let cards = result.map((item) =>
                    <ItemCard key={i++} title={item.title} text={item.shortText} buttonText={"See Blog"} footer={"footer"}/>
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