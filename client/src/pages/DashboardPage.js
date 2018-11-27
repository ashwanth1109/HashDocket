import React, { Component } from "react";
import { connect } from "react-redux";

const s = {
    container: "fullW height20 flex center"
};

const mapStateToProps = state => {
    //
    console.log(state.user);
    if (state.user) {
        return {
            currentPage: state.currentPage,
            user: state.user
        };
    } else {
        return {
            currentPage: 0,
            user: state.user
        };
    }
};

class DashboardPage extends Component {
    render() {
        // console.log(this.props);
        if (this.props.currentPage === 0) {
            this.props.history.push("/");
        }
        return (
            <div className={s.container}>
                <div>DashboardPage</div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(DashboardPage);
