import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { LOGIN_ROUTE } from "../../constants";

const PageNotFound = () => {
    const jwt = useSelector((state) => state.authReducer.jwt);
    return (
        <>
            {jwt === null ? (
                // if the user is not logged in then redirect to login
                <Redirect to={LOGIN_ROUTE} />
            ) : (
                <div className="container-lg">
                    <div className="container-fluid text-center">
                        <p className="display-2">404 Page Not Found</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PageNotFound;