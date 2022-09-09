import {
    ADD_ALL_USERS,
    EDIT_USER_BY_INDEX,
    REMOVE_ALL_USERS,
    REMOVE_USER_BY_INDEX,
} from "./userTypes.js";

export const addAllUsers = (users = []) => {
    return {
        type: ADD_ALL_USERS,
        payload: users,
    };
};

export const removeAllUsers = () => {
    return {
        type: REMOVE_ALL_USERS,
    };
};

export const editUserByIndex = (updatedUser = {}, id) => {
    return {
        type: EDIT_USER_BY_INDEX,
        payload: { updatedUser: updatedUser, id: id },
    };
};

export const removeUserByIndex = (index) => {
    return {
        type: REMOVE_USER_BY_INDEX,
        payload: index, // here payload is the index of the user to be deleted
    };
};
