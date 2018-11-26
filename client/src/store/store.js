import { createStore } from "redux";

let hashdocket = function(state = [], action) {
    switch (action.type) {
        case "TOGGLE_HEADER":
            return !action.headerOpen;
        case "WORD_SWAP":
            return 0;
        default:
            return state;
    }
};

let store = createStore(hashdocket);
export default store;
