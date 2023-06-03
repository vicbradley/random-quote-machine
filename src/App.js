import React, { Component } from "react";
import Quote from "./components/Quote";
import "./css/style.css";


class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <Quote />
                </div>

                
            </div>
        );
    }
}

export default App;
