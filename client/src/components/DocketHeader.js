import React, { Component } from "react";
import plus from "../assets/plus-white.png";
import Spacer from "./Spacer";

import { connect } from "react-redux";
import TextOrInput from "./TextOrInput";

const mapStateToProps = state => {
    return {
        headerOpen: state.headerOpen
    };
};

const s = {
    container:
        "fullW height80 googleRed borderBox flex row aCenter jBetween relative transition1",
    title: "flex1 fSize2 fWeight500 googleRed fWhite",
    addImage: "height40 imgContain transition05",
    addContainer:
        "abs width80 height80 flex center right0 black hoverGreenD cPointer transition05"
};

class DocketHeader extends Component {
    addDocketItem = () => {
        console.log(`add docket item`);
    };

    updateDocketName = () => {
        console.log(`update docket name`);
    };
    render() {
        return (
            <div className={s.container}>
                <Spacer w={20} />
                <TextOrInput
                    styles={s.title}
                    updateData={() => this.updateDocketName()}
                >
                    {this.props.title}
                </TextOrInput>
                <div
                    className={s.addContainer}
                    onClick={() => this.addDocketItem()}
                >
                    <img src={plus} alt="info bubble" className={s.addImage} />
                </div>
                <Spacer w={80} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(DocketHeader);
