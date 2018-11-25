import React, { Component } from "react";
import logo from "../assets/hashdocket-logo.png";

const s = {
    image: "imgContain height60"
};

export default class Logo extends Component {
    render() {
        return <img src={logo} alt="logo" className={s.image} />;
    }
}
