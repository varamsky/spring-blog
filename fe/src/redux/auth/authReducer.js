import {
    ADD_CURRENT_USER,
    EDIT_CURRENT_USER,
    REMOVE_AUTH_JWT,
    REMOVE_CURRENT_USER,
    SET_AUTH_JWT,
} from "./authTypes.js";

export const initialState = {
    jwt: null,
    currentUser: {},
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_JWT:
            return {
                ...state,
                jwt: action.payload,
            };
        case REMOVE_AUTH_JWT:
            return {
                ...state,
                jwt: null,
            };
        case ADD_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case EDIT_CURRENT_USER:
            return {
                ...state,
                current: action.payload,
            };
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                currentUser: {},
            };
        default:
            return state;
    }
};

export default authReducer;
