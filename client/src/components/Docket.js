import React, { Component } from "react";
import plus from "../assets/plus-white.png";
import Spacer from "./Spacer";

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        headerOpen: state.headerOpen
    };
};

const s = {
    container:
        "fullW height80 googleRed borderBox flex row aCenter jBetween relative transition1",
    title: "flex1 fSize2 fWeight500 fWhite",
    addImage: "height40 imgContain transition05",
    addContainer:
        "abs width80 height80 flex center right0 black hoverGreenLight cPointer transition05"
};

class Docket extends Component {
    addDocketItem = () => {
        console.log(`add docket item`);
    };
    render() {
        return (
            <div className={s.container}>
                <Spacer w={20} />
                <div className={s.title}>My First Docket</div>
                <div
                    className={s.addContainer}
                    onClick={() => this.addDocketItem()}
                >
                    <img src={plus} alt="info bubble" className={s.addImage} />
                </div>
                <Spacer w={60} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Docket);
