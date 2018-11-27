import React, { Component } from "react";

import "./Custom.css";
import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

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
                        <Router>
                            <div>
                                <Route exact path="/" component={HomePage} />
                                <Route
                                    path="/dashboard"
                                    component={DashboardPage}
                                />
                            </div>
                        </Router>
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;
