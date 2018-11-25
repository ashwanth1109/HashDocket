import React, { Component } from "react";
import Header from "./components/Header";

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
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default App;
