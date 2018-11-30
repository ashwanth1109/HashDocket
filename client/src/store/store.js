import { createStore } from "redux";

let hashdocket = function(state = [], action) {
    switch (action.type) {
        case "TOGGLE_HEADER": {
            console.log(`TOGGLE_HEADER`);
            return {
                user: action.user,
                headerOpen: action.headerOpen,
                currentPage: action.currentPage,
                headerZ: action.headerZ
            };
        }
        case "LOGIN_USER": {
            console.log(`LOGIN_USER`);
            return {
                user: action.user,
                headerOpen: action.headerOpen,
                currentPage: action.currentPage
            };
        }
        case "UPDATE_USER": {
            console.log(`UPDATE_USER`);
            return {
                user: action.user
            };
        }
        default: {
            console.log(`DEFAULT`);
            return state;
        }
    }
};

let store = createStore(hashdocket);
export default store;
