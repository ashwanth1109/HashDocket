import React, { Component } from "react";
import Spacer from "./Spacer";

const s = {
    container: "fullW fullH flex column",
    main: "width1000 fullH mAuto white flex column",
    tabContainer: "fullW height70 flex row",
    tab:
        "flex1 flex center fSize2 fWeight500 transition05 hoverOrange hoverFWhite cPointer",
    border: "fullW height20 darkGray",
    form: "flex1 center width600 mAuto flex column jEvenly",
    input: "fullW height50 bGray5 bOrangeFocus5 bRad10 noOutline pad10 fSize2",
    button:
        "fullW height70 flex center orangeL hoverOrange cPointer fSize2 fWhite fWeight500 transition05"
};

class HeaderBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUp: true
        };
    }

    render() {
        const selected = " fWhite orangeL";
        return (
            <div className={s.container}>
                <Spacer h={90} />
                <div className={s.main}>
                    <div className={s.tabContainer}>
                        <div
                            className={
                                s.tab + (this.state.signUp ? selected : "")
                            }
                            onClick={() => this.setState({ signUp: true })}
                        >
                            SIGN UP
                        </div>
                        <div
                            className={
                                s.tab + (this.state.signUp ? "" : selected)
                            }
                            onClick={() => this.setState({ signUp: false })}
                        >
                            SIGN IN
                        </div>
                    </div>
                    <div className={s.border} />
                    <div className={s.form}>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            ref="email"
                            className={s.input}
                        />
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            ref="password"
                            className={s.input}
                        />
                    </div>
                    <div className={s.button}>
                        {this.state.signUp
                            ? "Let's create your account now"
                            : "Login to your account now"}
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBody;
