import React, { Component } from "react";
import Logo from "./Logo";
import Spacer from "./Spacer";
import HeaderBody from "./HeaderBody";
import arrowDown from "../assets/chevron-arrow-down.png";

import { connect } from "react-redux";

const s = {
    headerContainer: "screenW height80 fixed",
    header: "screenW height80 relative",
    staticHeader: "fullW fullH black zIndex7 abs",
    dynamicHeader:
        "screenW height600 cream abs transition1 zIndex6 flex column",
    dynamicHeaderBody: "flex1 zIndex5",
    dynamicHeaderBorder: "fullW height10 darkGray zIndex5",
    container: "width1000 fullH mAuto flex flex1 row jBetween aCenter zIndex5",
    title: "fWhite fSize2 fWeight500",
    menuButtonOuter:
        "width120 height120 abs darkGray bRad60 left0 right0 mAuto zIndex5 flex center transition1",
    menuButtonInner:
        "width100 height100 green bRad50 flex column jEnd aCenter hoverGreenLight cPointer transition05",
    arrowImage: "width50 height40 imgContain transition1",
    bgOverlayDarken: "abs screenW screenH transition1Bg"
};

// const mapStateToProps = state => {
//     // // console.log(state.user);
//     // if (state.user) {
//     //     return {
//     //         user: state.user,
//     //         headerOpen: state.headerOpen,
//     //         currentPage: state.currentPage,
//     //         headerZ: state.headerZ
//     //     };
//     // } else {
//     //     if (state.length === 0) {
//     //         console.log(`entering state length 0 in header`);
//     //         return {
//     //             user: state.user,
//     //             headerOpen: false,
//     //             currentPage: state.currentPage,
//     //             headerZ: "zIndex4"
//     //         };
//     //     } else {
//     //         return {
//     //             user: state.user,
//     //             headerOpen: state.headerOpen,
//     //             currentPage: state.currentPage,
//     //             headerZ: state.headerZ
//     //         };
//     //     }
//     // }
// };

// const mapDispatchToProps = dispatch => {
//     // return {
//     //     toggleHeader: function(headerOpen, user, currentPage, headerZ) {
//     //         dispatch({
//     //             type: "TOGGLE_HEADER",
//     //             headerOpen: headerOpen,
//     //             user: user,
//     //             currentPage: currentPage,
//     //             headerZ: headerZ
//     //         });
//     //     }
//     // };
// };

const mapStateToProps = state => {
    // console.log(state);
    return {
        headerOpen: state.header.headerOpen,
        headerZ: state.header.headerZ
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleHeader: (headerOpen, headerZ) => {
            console.log(headerOpen);
            dispatch({
                type: "SET_HEADER",
                headerOpen: headerOpen,
                headerZ: true
            });
            if (headerOpen) {
                setTimeout(() => {
                    dispatch({
                        type: "SET_HEADER",
                        headerOpen: headerOpen,
                        headerZ: false
                    });
                }, 1000);
            }
            // if (!headerOpen) {
            //
            // } else {
            //     dispatch({
            //         type: "TOGGLE_HEADER",
            //         headerOpen: headerOpen,
            //         headerZ: !headerZ
            //     });
            //     setTimeout(() => {
            //
            //     }, 1000);
            // }
        }
    };
};

class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         headerOpen: false
    //     };
    // }

    toggleHeader = () => {
        // this.props.toggleHeader(
        //     !this.props.headerOpen,
        //     this.props.user,
        //     this.props.currentPage,
        //     this.props.headerZ
        // );
        // this.setState({
        //     headerOpen: !this.state.headerOpen
        // });
        this.props.toggleHeader(this.props.headerOpen, this.props.headerZ);
    };

    getUsername = () => {
        return this.props.user.email.split("@")[0];
    };
    render() {
        // const { headerOpen, headerZ } = this.props;
        // console.log(headerZ);
        // console.log(headerOpen);
        const { headerOpen, headerZ } = this.props;
        const headerPosition = headerOpen ? "-520px" : "0px";
        const arrowPosition = headerOpen ? "-575px" : "-55px";
        const arrowDirection = headerOpen ? "-180deg" : "0deg";
        const bgOverlayDarken = headerOpen ? " blackO40" : " blackO0";
        const headerZIndex = headerZ ? "zIndex5" : "zIndex4";
        return (
            <div className={s.headerContainer + " " + headerZIndex}>
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
                    <div className={s.bgOverlayDarken + bgOverlayDarken} />
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
