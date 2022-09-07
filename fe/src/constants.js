// server urls
export const BASE_SERVER_URL = "http://localhost:8080";
export const REGISTER_URL = BASE_SERVER_URL + "/api/users";
export const LOGIN_URL = BASE_SERVER_URL + "/api/login";
export const GET_ALL_USERS_URL = BASE_SERVER_URL + "/api/users";
export const GET_USER_BY_ID_URL = BASE_SERVER_URL + "/api/users"; // actual endpoint - /api/users/{id}
export const EDIT_USER_BY_ID_URL = BASE_SERVER_URL + "/api/users"; // actual endpoint - /api/users/{id}
export const DELETE_USER_BY_ID_URL = BASE_SERVER_URL + "/api/users"; // actual endpoint - /api/users/{id}
// react routes
export const BASE_REACT_ROUTE = "http://localhost:3000";
export const LOGIN_ROUTE = "/login";

// local storage item names
export const LS_SESSION_JWT = "SESSION_JWT";
export const LS_CURRENT_USER = "CURRENT_USER";