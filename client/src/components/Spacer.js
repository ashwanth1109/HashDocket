import React, { Component } from "react";

class Spacer extends Component {
    render() {
        const { w, h } = this.props;
        if (w) {
            return <div style={{ width: w, height: "100%" }} />;
        } else if (h) {
            return <div style={{ height: h, width: "100%" }} />;
        }
    }
}

export default Spacer;
