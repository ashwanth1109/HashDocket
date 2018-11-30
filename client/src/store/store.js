import { createStore, combineReducers } from "redux";

//===========================================
// HEADER REDUCER
//===========================================
const header = (state = { headerOpen: false, headerZ: false }, action) => {
    switch (action.type) {
        case "SET_HEADER":
            return {
                headerOpen: !action.headerOpen,
                headerZ: action.headerZ
            };
        default:
            return state;
    }
};

//===========================================
// USER REDUCER
//===========================================
const user = (state = null, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            //===========================================
            // NEVER EVER EVER EVER EVER EVER EVER
            // MUTATE STATE DIRECTLY IN YOUR ACTION
            // REDUX DOESNT DETECT IT
            //===========================================
            return Object.assign({}, action.user);
        // case "UPDATE":
        //     return action.users;
        default:
            return state;
    }
};

export default createStore(combineReducers({ header, user }));

// let hashdocket = function(state = [], action) {
// switch (action.type) {
// case "TOGGLE_HEADER": {
//     console.log(`TOGGLE_HEADER`);
//     return {
//         user: action.user,
//         headerOpen: action.headerOpen,
//         currentPage: action.currentPage,
//         headerZ: action.headerZ
//     };
// }
// case "LOGIN_USER": {
//     console.log(`LOGIN_USER`);
//     return {
//         user: action.user,
//         headerOpen: action.headerOpen,
//         currentPage: action.currentPage
//     };
// }
//         default: {
//             console.log(`DEFAULT`);
//             return state;
//         }
//     }
// };
