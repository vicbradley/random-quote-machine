import React, { Component } from "react";
import { fetchQuote } from "./FetchQuote";
import generateColor from "./Color";
import icon from "./quoteIcon";


let body =  document.querySelector("body");


class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            text: ""
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    async fetchNewQuote() {
        const quote = await fetchQuote();

        this.setState({
            author: quote.author,
            text: quote.text,
        });

        this.changeColor();
    }

    changeColor() {
        const quote = document.querySelector(".quote");
        const btn = document.querySelector(".btn");
        const color = generateColor();
        body.style.backgroundColor = color;
        quote.style.color = color;
        btn.style.backgroundColor = color
    }

    renderQuote() {
        if(this.state.text.length <= 90) {
            return (
                <p className="text large">{icon}{this.state.text}</p>
            )
        } else if(this.state.text.length > 90 && this.state.text.length <=140) {
            return (
                <p className="text medium">{icon}{this.state.text}</p>
            )
        } else {
            return (
                <p className="text small">{icon}{this.state.text}</p>
            )
            
        }
    }

    async componentDidMount() {
        this.fetchNewQuote();
    }

    handleOnClick() {
        this.fetchNewQuote();
    }

    render() {
        const { author, text } = this.state;
        return (
            <div>
                <div className="quote">
                    {this.renderQuote()}
                        
                    {/* {text.length <= 90 && <p className="text large">{icon}{text}</p>}
                    {(text.length > 90 && text.length <=140) && <p className="text medium">{icon}{text}</p>}
                    {text.length > 140 && <p className="text small">{icon}{text}</p>} */}
                    <p className="author">- {author}</p>
                </div>
                <button className="btn" onClick={this.handleOnClick}>New Quote</button>
            </div>
        );
    }
}


export default Quote;
