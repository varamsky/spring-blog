import {
    ADD_CURRENT_USER,
    EDIT_CURRENT_USER,
    REMOVE_AUTH_JWT,
    REMOVE_CURRENT_USER,
    SET_AUTH_JWT,
} from "./authTypes.js";

export const setAuthJwt = (jwt = "") => {
    return {
        type: SET_AUTH_JWT,
        payload: jwt,
    };
};

export const removeAuthJwt = () => {
    return {
        type: REMOVE_AUTH_JWT,
    };
};

export const addCurrentUser = (currentUser = {}) => {
    return {
        type: ADD_CURRENT_USER,
        payload: currentUser,
    };
};

export const editCurrentUser = (updatedCurrentUser = {}) => {
    return {
        type: EDIT_CURRENT_USER,
        payload: { updatedCurrentUser: updatedCurrentUser },
    };
};

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER,
    };
};
