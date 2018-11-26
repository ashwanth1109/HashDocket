import React, { Component } from "react";
import Spacer from "./Spacer";

import { connect } from "react-redux";

const s = {
    container: "width1000 mAuto blue height400 flex center column",
    title: "fSize3 fWeight500 fullW height80 flex row aCenter",
    blank: "fullW height80 whiteO50",
    flex: "flex1",
    wordSwap: "width220 height80 relative"
};

const mapStateToProps = state => {
    return {
        currentWord: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        wordSwap: function(currentWord) {
            dispatch({
                type: "WORD_SWAP",
                currentWord: currentWord
            });
        }
    };
};

class WordSwapTitle extends Component {
    wordSwap = () => {
        this.props.wordSwap(this.props.currentWord);
    };
    render() {
        return (
            <div className={s.container}>
                <div className={s.blank} />
                <div className={s.title}>
                    <div className={s.flex} />
                    Redefining the way you
                    <Spacer w={10} />
                    <div className={s.wordSwap}>
                        <div
                            className="abs width220 height80 flex aCenter pink"
                            style={{ bottom: "80px" }}
                        >
                            Plan.
                        </div>
                        <div
                            className="abs width220 height80 flex aCenter pink"
                            style={{ bottom: "0px" }}
                        >
                            Organize.
                        </div>
                    </div>
                    <div className={s.flex} />
                </div>
                <div className={s.blank} />
            </div>
        );
    }
}

const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(WordSwapTitle);

export default ConnectedComponent;
