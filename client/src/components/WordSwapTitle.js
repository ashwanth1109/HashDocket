import React, { Component } from "react";
import Spacer from "./Spacer";

const s = {
    container: "width1000 mAuto height400 flex center column",
    title: "fSize3 fWeight500 fullW height80 flex row aCenter zIndex1",
    blank: "fullW height80 white zIndex2",
    flex: "flex1",
    wordSwap: "width220 height80 relative",
    word: "abs width220 height80 flex aCenter"
};

const words = ["Plan.", "Organize.", "Track."];
const wordColor = ["#456BEF", "#FF521B", "#45CB85"];

class WordSwapTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWord: {
                index: 0,
                position: "0px",
                transition: "bottom 1s ease-in-out"
            },
            nextWord: {
                index: 1,
                position: "80px",
                transition: "bottom 1s ease-in-out"
            }
        };
    }

    componentDidMount() {
        this.transitionWord();
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    //===========================================
    // Transitions the words every 2 seconds
    //===========================================
    transitionWord = () => {
        this.timerId = setInterval(() => {
            const { currentWord, nextWord } = this.state;
            this.transition1();
            this.setState({
                currentWord: currentWord,
                nextWord: nextWord
            });
            this.transition2();
            setTimeout(() => {
                if (nextWord["position"] === "0px") {
                    this.setState({
                        currentWord: currentWord
                    });
                } else {
                    this.setState({
                        nextWord: nextWord
                    });
                }
                this.wordSwap();
            }, 1000);
        }, 2000);
    };
    //===========================================
    // Move word in view out of view and bring new word in
    //===========================================
    transition1 = () => {
        const { currentWord, nextWord } = this.state;
        if (currentWord.position === "0px") {
            currentWord["position"] = "-80px";
            nextWord["position"] = "0px";
        } else {
            currentWord["position"] = "0px";
            nextWord["position"] = "-80px";
        }
    };
    //===========================================
    // Move the word that just went out of view back to the top
    //===========================================
    transition2 = () => {
        const { currentWord, nextWord } = this.state;
        if (currentWord.position === "-80px") {
            currentWord["transition"] = "";
            currentWord["position"] = "80px";
        } else {
            nextWord["transition"] = "";
            nextWord["position"] = "80px";
        }
    };
    //===========================================
    // Change the index of the word that is out of view and add transition back
    //===========================================
    wordSwap = () => {
        const { currentWord, nextWord } = this.state;
        if (nextWord.position === "0px") {
            currentWord["index"] =
                nextWord.index === 2 ? 0 : nextWord.index + 1;
            currentWord["transition"] = "bottom 1s ease-in-out";
        } else {
            nextWord["index"] =
                currentWord.index === 2 ? 0 : currentWord.index + 1;
            nextWord["transition"] = "bottom 1s ease-in-out";
        }
    };
    render() {
        const { currentWord, nextWord } = this.state;
        return (
            <div className={s.container}>
                <div className={s.blank} />
                <div className={s.title}>
                    <div className={s.flex} />
                    Redefining the way you
                    <Spacer w={10} />
                    <div className={s.wordSwap}>
                        <div
                            className={s.word}
                            style={{
                                bottom: nextWord.position,
                                transition: nextWord.transition,
                                color: wordColor[nextWord.index]
                            }}
                        >
                            {words[nextWord.index]}
                        </div>
                        <div
                            className={s.word}
                            style={{
                                bottom: currentWord.position,
                                transition: currentWord.transition,
                                color: wordColor[currentWord.index]
                            }}
                        >
                            {words[currentWord.index]}
                        </div>
                    </div>
                    <div className={s.flex} />
                </div>
                <div className={s.blank} />
            </div>
        );
    }
}

export default WordSwapTitle;

//===========================================
// CODE GRAVEYARD
//===========================================
// import { connect } from "react-redux";

// const mapStateToProps = state => {
//     console.log(`state is:`);
//     console.log(state);
//     if (state.currentWord === undefined) {
//         console.log(`currentWord was returned as 0`);
//         return {
//             currentWord: 0
//         };
//     } else {
//         return {
//             currentWord: state.currentWord
//         };
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         wordSwap: function(currentWord, arrLength) {
//             console.log(`current word is ${currentWord}`);
//             if (currentWord === arrLength - 1) {
//                 currentWord = 0;
//             } else {
//                 currentWord++;
//             }
//             console.log(currentWord);
//             dispatch({
//                 type: "WORD_SWAP",
//                 currentWord: currentWord
//             });
//         }
//     };
// };

// const ConnectedComponent = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(WordSwapTitle);
