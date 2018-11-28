import React, { Component } from "react";
import DocketHeader from "./DocketHeader";
import DocketTitles from "./DocketTitles";
import DocketItem from "./DocketItem";
import Spacer from "./Spacer";

// const s = {
//     container: "fullW height20 flex center"
// };

class Docket extends Component {
    render() {
        return (
            <div>
                <DocketHeader />
                <DocketTitles />
                <DocketItem />
                <Spacer h={1} />
            </div>
        );
    }
}

export default Docket;
