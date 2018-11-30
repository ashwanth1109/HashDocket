import React, { Component } from "react";
import Spacer from "../components/Spacer";
import { connect } from "react-redux";
import Docket from "../components/Docket";

const s = {
    container: "width1000 mAuto flex column zIndex4",
    body: "fullW zIndex4"
};

const mapStateToProps = state => {
    //
    // console.log(state.user);
    if (state.user) {
        return {
            currentPage: state.currentPage,
            user: state.user
        };
    } else {
        return {
            currentPage: 0, // change to 0 for protected routes
            user: state.user
        };
    }
};

class DashboardPage extends Component {
    render() {
        console.log(this.props);
        if (this.props.currentPage === 0) {
            this.props.history.push("/");
        }
        const dockets = this.props.user ? this.props.user.dockets : [];
        return (
            <div className={s.container}>
                <Spacer h={150} />
                <div className={s.body}>
                    {dockets.map((docket, id) => (
                        <Docket
                            key={id}
                            title={docket.name}
                            items={docket.items}
                            docketId={id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(DashboardPage);
