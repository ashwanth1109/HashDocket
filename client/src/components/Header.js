import React, { Component } from "react";
import Logo from "./Logo";
import arrowDown from "../assets/chevron-arrow-down.png";

const s = {
    header: "screenW height80 relative",
    staticHeader: "fullW fullH darkGray zIndex2 abs",
    dynamicHeader: "",
    container: "width1000 fullH mAuto flex flex1 row jBetween aCenter",
    title: "fWhite fSize2 fWeight500",
    menuButtonOuter:
        "width120 height120 abs darkGray bRad60 botM55 left0 right0 mAuto zIndex1 flex center",
    menuButtonInner:
        "width100 height100 green bRad50 flex aEnd jCenter row hoverGreenLight cPointer transition05",
    arrowImage: "width70 height50 imgContain transition1"
};

export default class Header extends Component {
    render() {
        return (
            <div className={s.header}>
                <div className={s.menuButtonOuter}>
                    <div className={s.menuButtonInner}>
                        <img
                            alt="down arrow"
                            src={arrowDown}
                            className={s.arrowImage}
                        />
                    </div>
                </div>
                <div className={s.staticHeader}>
                    <div className={s.container}>
                        <Logo />
                        <div className={s.title}>HASH-DOCKET</div>
                    </div>
                </div>
                <div className={s.dynamicHeader}>
                    <div />
                </div>
            </div>
        );
    }
}
