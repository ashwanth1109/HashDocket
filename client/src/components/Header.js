import React, { Component } from "react";
import { w, h, bg } from "../Styles";

const stylizer = obj => {
    let retObject = {};
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            let tempObj = {};
            const arr = obj[prop];
            arr.forEach(element => {
                tempObj = Object.assign(tempObj, element);
            });
            retObject[prop] = tempObj;
        }
    }
    console.log(retObject);
    return retObject;
};

const s = stylizer({
    container: [w.screen, h.h80, bg.darkGrey]
});

export default class Header extends Component {
    render() {
        return <div style={s.container}>Header</div>;
    }
}
