import React, { Component } from "react";

import IntroGif from "../components/IntroGif";
import WordSwapTitle from "../components/WordSwapTitle";

import { connect } from "react-redux";

// const mapStateToProps = state => {
//     //
//     // return {
//     //     currentPage: state.currentPage
//     // };
// };

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

class HomePage extends Component {
    render() {
        // console.log(this.props);
        // console.log(this.props.user);
        if (this.props.user !== null) {
            // console.log(`entering history push`);
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

// export default HomePage;
