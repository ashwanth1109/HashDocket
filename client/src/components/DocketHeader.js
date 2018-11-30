import React, { Component } from "react";
import plus from "../assets/plus-white.png";
import Spacer from "./Spacer";

import { connect } from "react-redux";
import TextOrInput from "./TextOrInput";

const mapStateToProps = state => {
    return {
        headerOpen: state.headerOpen,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateUser: function(user) {
            dispatch({
                type: "UPDATE_USER",
                user: user
            });
        }
    };
};

const s = {
    container:
        "fullW height80 googleRed borderBox flex row aCenter jBetween relative transition1",
    title: "flex1 fSize2 fWeight500 googleRed fWhite",
    addImage: "height40 imgContain transition05",
    addContainer:
        "abs width80 height80 flex center right0 black hoverGreenD cPointer transition05"
};

class DocketHeader extends Component {
    addDocketItem = () => {
        console.log(`add docket item`);
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
        fetch(`/api/users/update/${user._id}`, {
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
                    .then(updatedUser => {
                        console.log(updatedUser);
                        //===========================================
                        // UPDATE REDUX STATE HERE
                        //===========================================
                        // this.props.updateUser();
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div className={s.container}>
                <Spacer w={20} />
                <TextOrInput
                    styles={s.title}
                    updateData={text => this.updateDocketName(text)}
                >
                    {this.props.title}
                </TextOrInput>
                <div
                    className={s.addContainer}
                    onClick={() => this.addDocketItem()}
                >
                    <img src={plus} alt="info bubble" className={s.addImage} />
                </div>
                <Spacer w={80} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DocketHeader);
