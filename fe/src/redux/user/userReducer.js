import {
    ADD_ALL_USERS,
    EDIT_USER_BY_INDEX,
    REMOVE_ALL_USERS,
    REMOVE_USER_BY_INDEX,
} from "./userTypes.js";

export const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case REMOVE_ALL_USERS:
            return {
                ...state,
                users: [],
            };
        case EDIT_USER_BY_INDEX:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.id)
                        user = action.payload.updatedUser;
                    return user;
                }),
            };
        case REMOVE_USER_BY_INDEX:
            return {
                ...state,
                users: [
                    // here action.payload is the index of the user to be deleted
                    ...state.users.slice(0, action.payload),
                    ...state.users.slice(action.payload + 1),
                ],
            };
        default:
            return state;
    }
};

export default userReducer;
