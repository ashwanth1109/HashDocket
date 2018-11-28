import React, { Component } from "react";
import Spacer from "./Spacer";

const s = {
    container: "fullW height50 flex row aCenter",
    title: "flex5",
    person: "flex2 flex center",
    status: "flex3 flex center",
    type: "flex3 flex center",
    priority: "flex3 flex center",
    estimate: "flex3 flex center",
    hash: "flex1 flex center"
};

class DocketTitles extends Component {
    render() {
        return (
            <div className={s.container}>
                <Spacer w={5} />
                <div className={s.title}>Enter your docket items below</div>
                <div className={s.person}>Person</div>
                <div className={s.status}>Status</div>
                <div className={s.type}>Type</div>
                <div className={s.priority}>Priority</div>
                <div className={s.estimate}>Estimation</div>
                <div className={s.hash}>#</div>
            </div>
        );
    }
}

export default DocketTitles;
