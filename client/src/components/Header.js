import React, { Component } from "react";
import Logo from "./Logo";
import Spacer from "./Spacer";
import arrowDown from "../assets/chevron-arrow-down.png";

// import uistore from "../store/uistore";

const s = {
    header: "screenW height80 relative",
    staticHeader: "fullW fullH darkGray zIndex3 abs",
    dynamicHeader:
        "screenW height600 green abs transition1 zIndex2 flex column",
    dynamicHeaderBody: "flex1",
    dynamicHeaderBorder: "fullW height20 darkGray",
    container: "width1000 fullH mAuto flex flex1 row jBetween aCenter",
    title: "fWhite fSize2 fWeight500",
    menuButtonOuter:
        "width120 height120 abs darkGray bRad60 left0 right0 mAuto zIndex1 flex center transition1",
    menuButtonInner:
        "width100 height100 green bRad50 flex column jEnd aCenter hoverGreenLight cPointer transition05",
    arrowImage: "width50 height40 imgContain transition1",
    bgOverlayDarken: "abs screenW screenH transition1"
};

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerOpen: false
        };
    }

    componentDidMount() {
        // uistore.subscribe(() => {
        //     this.setState({
        //         headerOpen: uistore.getState()
        //     });
        // });
    }

    openHeader = () => {
        console.log(`header should be opened`);
        // uistore.dispatch({
        //     type: "TOGGLE_HEADER",
        //     headerOpen: this.state.headerOpen
        // });
    };
    render() {
        const { headerOpen } = this.state;
        console.log(`Header state is ${headerOpen}`);
        console.log(`Header type is ${typeof headerOpen}`);
        const headerPosition = headerOpen ? "-520px" : "0px";
        const arrowPosition = headerOpen ? "-575px" : "-55px";
        const arrowDirection = headerOpen ? "-180deg" : "0deg";
        const bgOverlayDarken = headerOpen ? "#00000066" : "";
        return (
            <div>
                <div className={s.header}>
                    <div
                        className={s.menuButtonOuter}
                        style={{ bottom: arrowPosition }}
                    >
                        <div
                            className={s.menuButtonInner}
                            onClick={() => this.openHeader()}
                        >
                            <img
                                alt="down arrow"
                                src={arrowDown}
                                className={s.arrowImage}
                                style={{
                                    transform: `rotate(${arrowDirection})`
                                }}
                            />
                            <Spacer h={5} />
                        </div>
                    </div>
                    <div className={s.staticHeader}>
                        <div className={s.container}>
                            <Logo />
                            <div className={s.title}>HASH-DOCKET</div>
                        </div>
                    </div>
                    <div
                        className={s.dynamicHeader}
                        style={{ bottom: headerPosition }}
                    >
                        <div className={s.dynamicHeaderBody} />
                        <div className={s.dynamicHeaderBorder} />
                    </div>
                </div>
                <div>
                    <div
                        className={s.bgOverlayDarken}
                        style={{ backgroundColor: bgOverlayDarken }}
                    />
                </div>
            </div>
        );
    }
}
