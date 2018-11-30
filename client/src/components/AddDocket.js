import React, { Component } from "react";
import plus from "../assets/plus-white.png";
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log(state);
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
        "fullW height200 black hoverGreenD cPointer transition05 flex center zIndex4",
    addImage: "height50 imgContain"
};

class AddDocket extends Component {
    addDocket = () => {
        const { user } = this.props;
        fetch("/api/users/addDocket", {
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
                        this.props.updateUser(data);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div className={s.container} onClick={() => this.addDocket()}>
                <img src={plus} alt="add docket" className={s.addImage} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDocket);
