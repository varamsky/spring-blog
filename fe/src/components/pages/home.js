import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants";
import ProjectNavbar from "../widgets/projectNavbar";

const Home = () => {
    const authReducer = useSelector((state) => state.authReducer);
    const jwt = authReducer.jwt;
    console.log(`jwt = ${jwt}`);
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
                                <h1 className="d-inline">Meetings</h1>
                            </div>
                            <hr />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Home;