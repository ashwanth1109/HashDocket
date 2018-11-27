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
        "fullW height70 flex center green hoverGreenD cPointer fSize2 hoverFSize21 fWeight500 transition05",
    socialTabContainer: "fullW height70 flex row",
    socialTab:
        "flex1 flex center fSize15 fWhite transition05 cPointer hoverFSize16"
};

class HeaderBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUp: true,
            user: null
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
                            this.setState({
                                user: data
                            });
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

export default HeaderBody;
