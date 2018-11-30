import React, { Component } from "react";
import plus from "../assets/plus-white.png";
// import delete from '../assets/delete.png';
import del from "../assets/delete.png";

import Spacer from "./Spacer";

import { connect } from "react-redux";
import TextOrInput from "./TextOrInput";

// const mapStateToProps = state => {
//     // console.log(`map state to props`);
//     // console.log(state);
//     // return {
//     //     user: state.user,
//     //     currentPage: state.currentPage,
//     //     headerOpen: false,
//     //     headerZ: state.headerZ
//     // };
// };

// const mapDispatchToProps = dispatch => {
//     // return {
//     //     updateUser: function(user, currentPage, headerOpen, headerZ) {
//     //         console.log(`User: ${user}`);
//     //         console.log(`Current Page: ${currentPage}`);
//     //         console.log(`Header: ${headerOpen}`);
//     //         dispatch({
//     //             type: "UPDATE_USER",
//     //             user: user,
//     //             currentPage: currentPage,
//     //             headerOpen: headerOpen,
//     //             headerZ: headerZ
//     //         });
//     //     }
//     // };
// };

const mapStateToProps = state => {
    console.log(`mapStateToProps: DocketHeader`);
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user =>
            dispatch({
                type: "UPDATE_USER",
                user: user
            })
    };
};

const s = {
    container:
        "fullW height80 googleRed borderBox flex row aCenter jBetween relative transition1",
    title: "flex1 fullH flex row aCenter fSize2 fWeight500 googleRed fWhite",
    addImage: "height40 imgContain transition05",
    addContainer:
        "width80 height80 flex center right0 black hoverGreenD cPointer transition05"
};

class DocketHeader extends Component {
    addDocketItem = () => {
        console.log(`add docket item`);
    };

    removeDocket = () => {
        console.log(`remove docket`);
        const { user, docketId } = this.props;
        user.dockets.splice(docketId, 1);
        fetch(`/api/users/update`, {
            headers: {
                //prettier-ignore
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(user)
        })
            .then(res => {
                res.json()
                    .then(data => {
                        console.log(data);
                        //===========================================
                        // UPDATE REDUX STATE HERE
                        //===========================================
                        this.props.updateUser(user);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    updateDocketName = newName => {
        console.log(`update docket name`);
        // console.log(this.props.user);
        const { user, docketId } = this.props;
        console.log(newName);
        console.log(docketId);
        //===========================================
        // UPDATE USER FROM DOCKET NAME REF
        //===========================================
        user.dockets[docketId].name = newName;
        console.log(user);
        fetch(`/api/users/update`, {
            headers: {
                //prettier-ignore
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(user)
        })
            .then(res => {
                res.json()
                    .then(data => {
                        console.log(data);
                        //===========================================
                        // UPDATE REDUX STATE HERE
                        //===========================================
                        this.props.updateUser(user);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };
    render() {
        console.log(`docket header rendered`);
        const { user, docketId } = this.props;
        console.log(user);
        return (
            <div className={s.container}>
                <Spacer w={20} />
                <TextOrInput
                    styles={s.title}
                    updateData={text => this.updateDocketName(text)}
                >
                    {user.dockets[docketId].name}
                </TextOrInput>
                <div
                    className={s.addContainer}
                    onClick={() => this.addDocketItem()}
                >
                    <img src={plus} alt="info bubble" className={s.addImage} />
                </div>
                <div
                    className={s.addContainer}
                    onClick={() => this.removeDocket()}
                >
                    <img src={del} alt="info bubble" className={s.addImage} />
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DocketHeader);

// export default DocketHeader;
