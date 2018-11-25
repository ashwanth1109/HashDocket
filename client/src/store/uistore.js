import { createStore } from "redux";

let ui = function(state = [], action) {
    switch (action.type) {
        case "TOGGLE_HEADER":
            return !action.headerOpen;
        default:
            return state;
    }
};

let uistore = createStore(ui);
export default uistore;
