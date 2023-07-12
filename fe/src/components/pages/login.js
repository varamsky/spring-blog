import React, { useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Input } from "reactstrap";
import TextField from "../widgets/textField";
import {
    LOGIN_URL,
    LS_SESSION_JWT,
    LS_CURRENT_USER,
    USERS_ROUTE
} from "./../../constants.js";
import "./../../styles/login.css";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser, setAuthJwt } from "../../redux/auth/authActions";
import checkSessionExpired from "../utils/checkSessionExpired";

const Login = (props) => {
    const isSessionExpired =
        props.location.state !== undefined
            ? props.location.state.isSessionExpired
            : false;
    const history = useHistory();
    const authReducer = useSelector((state) => state.authReducer);
    const jwt = authReducer.jwt;
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    function handleUsernameChange(e) {
        setLoginError(null);
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setLoginError(null);
        setPassword(e.target.value);
    }

    function clearSuccessAndErrorMessages() {
        setUsernameError(null);
        setPasswordError(null);
        setLoginError(null);
        setSuccessMessage(null);
    }

    function handleLogin(e) {
        e.preventDefault();

        clearSuccessAndErrorMessages();

        if (true) {
            axios
                .post(LOGIN_URL, {
                    username: username,
                    password: password,
                })
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(setAuthJwt(response.data.token));
                        dispatch(addCurrentUser(response.data.user));
                        // reponse.data.expires_in is time in seconds
                        const ttl = response.data.expires_in * 1000; // time for expiry in milliseconds
                        const jwtToLocalStorage = {
                            value: response.data,
                            expiry: new Date().getTime() + ttl,
                        };
                        const currentUserToLocalStorage = {
                            value: response.data.user,
                            expiry: new Date().getTime() + ttl,
                        };
                        localStorage.setItem(
                            LS_SESSION_JWT,
                            JSON.stringify(jwtToLocalStorage)
                        );
                        localStorage.setItem(
                            LS_CURRENT_USER,
                            JSON.stringify(currentUserToLocalStorage)
                        );
                        setTimeout(() => {
                            history.push({ USERS_ROUTE });
                        }, 1500);
                    } else {
                        setLoginError(response.data.message);
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        setLoginError(error.response.data.message);
                    }
                });
        }
    }

    console.log(`jwt = ${jwt} and checkSessionExpired = ${checkSessionExpired()}`);

    return (
        <>
            {jwt !== null && checkSessionExpired() === false ? (
                // if the admin is logged in and session is not expired then redirect to admin dashboard
                <Redirect to={USERS_ROUTE} />
            ) : (
                <div className="row login-row justify-content-center">
                    <div className="col-lg-4 col-md-7 login-form">
                        {isSessionExpired ? (
                            <p className="text-danger">
                                Session Expired Login again
                            </p>
                        ) : null}
                        <div>
                            <p className="mt-4 fs-4 mx-5">
                                Login
                            </p>
                            <form
                                onSubmit={handleLogin}
                                className="mx-5 text-start"
                            >
                                <TextField
                                    label="Username"
                                    placeholder="Enter username"
                                    type="text"
                                    autofocus={true}
                                    onChange={handleUsernameChange}
                                    value={username}
                                    size="lg"
                                />
                                {usernameError !== null ? (
                                    <p className="text-danger">{usernameError}</p>
                                ) : null}
                                <TextField
                                    label="Password"
                                    placeholder="Enter password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={handlePasswordChange}
                                    value={password}
                                    size="lg"
                                />
                                <Input
                                    id="show-password"
                                    type="checkbox"
                                    className="me-2"
                                    checked={showPassword}
                                    onChange={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                                <label htmlFor="show-password">
                                    Show Password
                                </label>
                                {passwordError !== null ? (
                                    <p className="text-danger">
                                        {passwordError}
                                    </p>
                                ) : null}
                                {loginError !== null ? (
                                    <p className="text-danger">{loginError}</p>
                                ) : null}
                                <Button
                                    type="submit"
                                    color="primary"
                                    className="mt-2"
                                    size="lg"
                                    block={true}
                                >
                                    Login
                                </Button>
                                {successMessage !== null ? (
                                    <p className="text-success text-center">
                                        {successMessage}
                                    </p>
                                ) : null}
                            </form>
                        </div>
                    </div>
                </div>)}
        </>
    );
}

export default Login;