import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { GET_ALL_USERS_URL, LOGIN_ROUTE } from "../../constants";
import { addAllUsers, removeAllUsers } from "../../redux/user/userActions";
import ProjectNavbar from "../widgets/projectNavbar";

const Users = () => {
    const authReducer = useSelector((state) => state.authReducer);
    const jwt = authReducer.jwt;

    const userReducer = useSelector((state) => state.userReducer);
    const users = userReducer.users;

    const dispatch = useDispatch();

    async function fetchMeetings() {
        const response = await axios.get(GET_ALL_USERS_URL, {
            headers: { Authorization: `Bearer ${jwt}` },
        });

        let usersList = [];
        response.data.users.data.forEach((user) => {
            usersList.push(user);
        });
        console.log(`users list = ${JSON.stringify(usersList)}`);

        dispatch(addAllUsers(usersList));
    }

    useEffect(() => {
        fetchMeetings();
        return () => {
            dispatch(removeAllUsers());
        };
    }, [dispatch]);

    return (
        <>
            {
                jwt === null ? (
                    <Redirect to={LOGIN_ROUTE} />
                ) : (
                    <div className="container-lg">
                        <ProjectNavbar />
                        <div className="container-fluid">
                            <div className="page-header">
                                <h1 className="d-inline">Users</h1>
                            </div>
                            <hr />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Users;