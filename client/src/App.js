import React, { Component } from "react";
import Header from "./components/Header";
import IntroGif from "./components/IntroGif";
import "./Custom.css";
import { Provider } from "react-redux";
import store from "./store/store";
import WordSwapTitle from "./components/WordSwapTitle";

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
        // this.getTestData();
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
                <Provider store={store}>
                    <div>
                        <Header />
                        <IntroGif />
                        <WordSwapTitle />
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;
