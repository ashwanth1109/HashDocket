import React, { Component } from "react";
// import Spacer from "./Spacer";

import AuthForm from "./AuthForm";
import { connect } from "react-redux";

const s = {
    container: "fullW fullH"
};

// const mapStateToProps = state => {
//     // return {
//     //     user: state.user,
//     //     headerOpen: state.headerOpen,
//     //     currentPage: state.currentPage
//     // };
// };

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

class HeaderBody extends Component {
    render() {
        return (
            <div className={s.container}>
                {this.props.user !== null ? null : <AuthForm />}
            </div>
        );
    }
}

export default connect(mapStateToProps)(HeaderBody);

// export default HeaderBody;
