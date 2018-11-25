import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount() {
        this.getTestData();
    }

    getTestData = () => {
        fetch("/api")
            .then(res => res.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>{this.state.data ? this.state.data.message : ""}</p>
                </header>
            </div>
        );
    }
}

export default App;
