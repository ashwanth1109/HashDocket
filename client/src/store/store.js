import { createStore } from "redux";

let hashdocket = function(state = [], action) {
    switch (action.type) {
        case "TOGGLE_HEADER": {
            return {
                user: action.user,
                headerOpen: action.headerOpen,
                currentPage: action.currentPage
            };
        }
        case "LOGIN_USER": {
            return {
                user: action.user,
                headerOpen: action.headerOpen,
                currentPage: action.currentPage
            };
        }
        default: {
            return state;
        }
    }
};

let store = createStore(hashdocket);
export default store;
