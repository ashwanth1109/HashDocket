import React, { Component } from "react";
import Logo from "./Logo";
import Spacer from "./Spacer";
import HeaderBody from "./HeaderBody";
import arrowDown from "../assets/chevron-arrow-down.png";

import { connect } from "react-redux";

const s = {
    headerContainer: "screenW height80 fixed zIndex5",
    header: "screenW height80 relative",
    staticHeader: "fullW fullH black zIndex7 abs",
    dynamicHeader:
        "screenW height600 cream abs transition1 zIndex6 flex column",
    dynamicHeaderBody: "flex1",
    dynamicHeaderBorder: "fullW height10 darkGray",
    container: "width1000 fullH mAuto flex flex1 row jBetween aCenter",
    title: "fWhite fSize2 fWeight500",
    menuButtonOuter:
        "width120 height120 abs darkGray bRad60 left0 right0 mAuto zIndex5 flex center transition1",
    menuButtonInner:
        "width100 height100 green bRad50 flex column jEnd aCenter hoverGreenLight cPointer transition05",
    arrowImage: "width50 height40 imgContain transition1",
    bgOverlayDarken: "abs screenW screenH transition1"
};

const mapStateToProps = state => {
    // console.log(state.user);
    if (state.user) {
        return {
            user: state.user,
            headerOpen: state.headerOpen,
            currentPage: state.currentPage
        };
    } else {
        if (state.length === 0) {
            return {
                user: state.user,
                headerOpen: false,
                currentPage: state.currentPage
            };
        } else {
            return {
                user: state.user,
                headerOpen: state.headerOpen,
                currentPage: state.currentPage
            };
        }
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleHeader: function(headerOpen, user, currentPage) {
            dispatch({
                type: "TOGGLE_HEADER",
                headerOpen: headerOpen,
                user: user,
                currentPage: currentPage
            });
        }
    };
};

class Header extends Component {
    toggleHeader = () => {
        this.props.toggleHeader(
            !this.props.headerOpen,
            this.props.user,
            this.props.currentPage
        );
    };

    getUsername = () => {
        return this.props.user.email.split("@")[0];
    };
    render() {
        const { headerOpen } = this.props;
        const headerPosition = headerOpen ? "-520px" : "0px";
        const arrowPosition = headerOpen ? "-575px" : "-55px";
        const arrowDirection = headerOpen ? "-180deg" : "0deg";
        const bgOverlayDarken = headerOpen ? "#00000066" : "";
        return (
            <div className={s.headerContainer}>
                <div className={s.header}>
                    <div
                        className={s.menuButtonOuter}
                        style={{ bottom: arrowPosition }}
                    >
                        <div
                            className={s.menuButtonInner}
                            onClick={() => this.toggleHeader()}
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
                            <div className={s.title}>
                                {this.props.user
                                    ? this.getUsername()
                                    : "HASH-DOCKET"}
                            </div>
                        </div>
                    </div>
                    <div
                        className={s.dynamicHeader}
                        style={{ bottom: headerPosition }}
                    >
                        <div className={s.dynamicHeaderBody}>
                            <HeaderBody />
                        </div>
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

const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default ConnectedComponent;
