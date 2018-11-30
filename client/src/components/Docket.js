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
        const { items, docketId } = this.props;
        console.log(docketId);
        return (
            <div>
                <DocketHeader docketId={docketId} />
                <DocketTitles />
                {items.map((item, id) => (
                    <div key={id}>
                        <DocketItem />
                        <Spacer h={1} />
                    </div>
                ))}
                <Spacer h={50} />
            </div>
        );
    }
}

export default Docket;
