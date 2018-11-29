import React, { Component } from "react";

const s = {
    container: "cPointer"
};

class TextOrInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textMode: true
        };
    }

    toggleTextAndInput = () => {
        // console.log(`toggle text and input`);
        // console.log(!this.state.textMode);
        if (!this.state.textMode) {
            this.props.updateData();
        }
        this.setState({
            textMode: !this.state.textMode
        });
    };
    render() {
        const { styles, children } = this.props;
        if (this.state.textMode) {
            return (
                <div
                    className={s.container + " " + styles}
                    onClick={() => this.toggleTextAndInput()}
                >
                    <div>{children}</div>
                </div>
            );
        } else {
            // console.log(children);
            return (
                <input
                    type="text"
                    className={s.container + " noOutline " + styles}
                    style={{ borderWidth: "0px" }}
                    autoFocus
                    onClick={() => this.toggleTextAndInput()}
                />
            );
        }
    }
}

export default TextOrInput;
