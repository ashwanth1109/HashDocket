import React, { Component } from "react";
import Header from "./components/Header";
import IntroVideo from "./components/IntroVideo";
import "./Custom.css";
import { Provider } from "react-redux";
import uistore from "./store/uistore";

const s = {
    global: "fQuicksand"
};

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
            <div className={s.global}>
                <Provider store={uistore}>
                    <div>
                        <Header />
                        <IntroVideo />
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;
