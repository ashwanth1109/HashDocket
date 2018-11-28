import React, { Component } from "react";
// import Spacer from "./Spacer";

import { connect } from "react-redux";
import AuthForm from "./AuthForm";

const s = {
    container: "fullW fullH"
};

const mapStateToProps = state => {
    return {
        user: state.user,
        headerOpen: state.headerOpen,
        currentPage: state.currentPage
    };
};

class HeaderBody extends Component {
    render() {
        return (
            <div className={s.container}>
                {this.props.currentPage === 1 ? null : <AuthForm />}
            </div>
        );
    }
}

export default connect(mapStateToProps)(HeaderBody);
