import React, { Component } from "react";
import Spacer from "./Spacer";

const s = {
    container: "fullW height50 flex row",
    leftBorder: "googleRed width5",
    title: "flex5 lightGray flex aCenter row cPointer",
    person: "flex2 lightGray flex center cPointer",
    status: "flex3 lightGray flex center cPointer",
    type: "flex3 lightGray flex center cPointer",
    priority: "flex3 lightGray flex center cPointer",
    estimate: "flex3 lightGray flex center cPointer",
    hash: "flex1 lightGray flex center cPointer"
};

class DocketItem extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.leftBorder} />
                <div className={s.title}>
                    <Spacer w={15} />
                    Click items to edit
                </div>
                <Spacer w={3} />
                <div className={s.person}>Person</div>
                <Spacer w={3} />
                <div className={s.status}>Status</div>
                <Spacer w={3} />
                <div className={s.type}>Type</div>
                <Spacer w={3} />
                <div className={s.priority}>Priority</div>
                <Spacer w={3} />
                <div className={s.estimate}>Estimation</div>
                <Spacer w={3} />
                <div className={s.hash}>#</div>
            </div>
        );
    }
}

export default DocketItem;
