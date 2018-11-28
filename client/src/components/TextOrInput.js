import React, { Component } from "react";

const s = {
    container: "fullW height20 flex center"
};

class TextOrInput extends Component {
    render() {
        return (
            <div className={s.container}>
                <div>TextOrInput</div>
            </div>
        );
    }
}

export default TextOrInput;
