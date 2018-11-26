import React, { Component } from "react";
import dna from "../assets/DNA.gif";
import Spacer from "./Spacer";

const s = {
    container: "screenW screenH",
    blackOverlay:
        "screenW screenH blackO40 abs fGreen fSize5 flex column jEnd aCenter fWeight700"
};

class IntroVideo extends Component {
    render() {
        return (
            <div className={s.container}>
                <img
                    src={dna}
                    alt="bg"
                    className="screenW screenH imgCover abs"
                />
                <div className={s.blackOverlay}>
                    UNLOCK YOUR POTENTIAL TODAY
                    <Spacer h={100} />
                </div>
            </div>
        );
    }
}

export default IntroVideo;
