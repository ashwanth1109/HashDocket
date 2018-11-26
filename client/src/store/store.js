import { createStore } from "redux";

let hashdocket = function(state = [], action) {
    switch (action.type) {
        case "TOGGLE_HEADER": {
            return {
                headerOpen: action.headerOpen
            };
        }
        default: {
            return state;
        }
    }
};

let store = createStore(hashdocket);
export default store;
