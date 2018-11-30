import React, { Component } from "react";
import Spacer from "../components/Spacer";
import Docket from "../components/Docket";
import { connect } from "react-redux";

const s = {
    container: "width1000 mAuto flex column zIndex4",
    body: "fullW zIndex4"
};

// const mapStateToProps = state => {
//     // console.log(`in map state to props on dashboard`);
//     // console.log(state.user);
//     // if (state.user) {
//     //     return {
//     //         currentPage: state.currentPage,
//     //         user: state.user
//     //     };
//     // } else {
//     //     return {
//     //         currentPage: 0, // change to 0 for protected routes
//     //         user: null
//     //     };
//     // }
// };

const mapStateToProps = state => {
    console.log(state);
    return {
        user: state.user
    };
};

class DashboardPage extends Component {
    render() {
        if (this.props.user === null) {
            this.props.history.push("/");
        }
        const dockets = this.props.user ? this.props.user.dockets : [];
        console.log(dockets);
        return (
            <div className={s.container}>
                <Spacer h={150} />
                <div className={s.body}>
                    {dockets.map((docket, id) => (
                        <Docket key={id} items={docket.items} docketId={id} />
                    ))}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(DashboardPage);

// export default DashboardPage;
