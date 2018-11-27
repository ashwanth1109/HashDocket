import React, { Component } from "react";
import Spacer from "./Spacer";

import { connect } from "react-redux";

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
        "fullW height70 flex center green hoverGreenD cPointer fSize2 hoverFSize21 fWeight500 transition05",
    socialTabContainer: "fullW height70 flex row",
    socialTab:
        "flex1 flex center fSize15 fWhite transition05 cPointer hoverFSize16"
};

const mapStateToProps = state => {
    //
    // console.log(`entering map state to props`);
    // console.log(state.user);
    return {
        user: state.user,
        headerOpen: state.headerOpen
    };
};

const mapDispatchToProps = dispatch => {
    //
    return {
        loginUser: function(user, headerOpen) {
            dispatch({
                type: "LOGIN_USER",
                user: user,
                headerOpen: headerOpen
            });
        }
    };
};

class HeaderBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUp: true,
            user: null,
            authWindow: null
        };
    }

    signUp = () => {
        //===========================================
        // Create new user object
        //===========================================
        const newUser = {
            email: this.refs.email.value,
            password: this.refs.password.value
        };
        //===========================================
        // Make a POST request to api/users/register
        //===========================================
        fetch("/api/users/register", {
            headers: {
                // prettier-ignore
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(newUser)
        })
            .then(res => {
                if (res.status === 400) {
                    console.log(`400 error was logged`);
                }
                res.json()
                    .then(data => console.log(`User account created`))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    logIn = () => {
        //===========================================
        // Create object to store the user logging in
        //===========================================
        const user = {
            email: this.refs.email.value,
            password: this.refs.password.value
        };
        //===========================================
        // Make a POST request to api/users/login
        //===========================================
        fetch("/api/users/login", {
            headers: {
                //prettier-ignore
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.status === 400 || res.status === 404) {
                    // Bad credentials error I think
                } else {
                    res.json()
                        .then(data => {
                            console.log(`user has logged in`);
                            this.props.loginUser(
                                data.user,
                                this.props.headerOpen
                            );
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            })
            .catch(err => console.log(err));
    };

    signUpOrLogin = () => {
        if (this.state.signUp) {
            this.signUp();
        } else {
            this.logIn();
        }
    };

    githubLogin = () => {
        const AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
        const REDIRECT_URI = "http://localhost:3001/api/github/callback";
        const ENCODED_REDIRECT_URI = encodeURIComponent(REDIRECT_URI);
        const CLIENT_ID = "12a0ff06416a332cd7f1";
        const url = `${AUTHORIZE_URL}?scope=user%3Aemail&client_id=${CLIENT_ID}&redirect_uri=${ENCODED_REDIRECT_URI}`;
        const authWindow = this.popUpWindow(url);
        this.setState({
            authWindow: authWindow
        });
    };

    popUpWindow = myUrl => {
        const windowArea = {
            width: 1000,
            height: 630,
            left: Math.floor(window.screenX + (window.outerWidth - 1000) / 2),
            top: Math.floor(window.screenY + (window.outerHeight - 630) / 8)
        };
        const sep = myUrl.indexOf("?") !== -1 ? "&" : "?";
        const url = `${myUrl}${sep}`;
        const windowOpts = `toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0,
                            width=${windowArea.width},
                            height=${windowArea.height},
                            left=${windowArea.left},
                            top=${windowArea.top}`;
        const authWindow = window.open(url, "_blank", windowOpts);
        return authWindow;
    };

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
                    <div
                        className={s.button}
                        onClick={() => this.signUpOrLogin()}
                    >
                        {this.state.signUp
                            ? "Let's create your account now"
                            : "Login to your account now"}
                    </div>
                    <div className={s.socialTabContainer}>
                        <div className={s.socialTab + " fbBlue hoverFbBlue"}>
                            FACEBOOK
                        </div>
                        <div
                            className={
                                s.socialTab + " githubBlack hoverGithubBlack"
                            }
                            onClick={() => this.githubLogin()}
                        >
                            GITHUB
                        </div>
                        <div
                            className={
                                s.socialTab + " googleRed hoverGoogleRed"
                            }
                        >
                            GOOGLE
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderBody);

export default ConnectedComponent;
