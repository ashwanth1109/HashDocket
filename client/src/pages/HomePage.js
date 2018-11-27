import React, { Component } from "react";

import IntroGif from "../components/IntroGif";
import WordSwapTitle from "../components/WordSwapTitle";

import { connect } from "react-redux";

const mapStateToProps = state => {
    //
    return {
        currentPage: state.currentPage
    };
};

class HomePage extends Component {
    render() {
        if (this.props.currentPage === 1) {
            this.props.history.push("/dashboard");
        }
        return (
            <div>
                <IntroGif />
                <WordSwapTitle />
            </div>
        );
    }
}

export default connect(mapStateToProps)(HomePage);
