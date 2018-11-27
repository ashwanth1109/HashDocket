import { createStore } from "redux";

let hashdocket = function(state = [], action) {
    switch (action.type) {
        case "TOGGLE_HEADER": {
            return {
                user: action.user,
                headerOpen: action.headerOpen
            };
        }
        case "LOGIN_USER": {
            return {
                user: action.user,
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
