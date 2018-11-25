import React, { Component } from "react";
import introVideo from "../assets/intro-video.mp4";
import Spacer from "./Spacer";

const s = {
    container: "fullW relative",
    blackOverlay:
        "screenW screenH blackO70 abs fWhite fSize5 flex column jEnd aCenter fWeight700"
};

class IntroVideo extends Component {
    render() {
        return (
            <div className={s.container}>
                <video className="screenW screenH imgCover abs" autoPlay loop>
                    <source src={introVideo} type="video/mp4" />
                    This video cannot be played on your browser
                </video>
                <div className={s.blackOverlay}>
                    UNLOCK YOUR POTENTIAL TODAY
                    <Spacer h={100} />
                </div>
            </div>
        );
    }
}

export default IntroVideo;
