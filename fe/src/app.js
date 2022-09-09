import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/pages/login.js";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  LS_CURRENT_USER,
  LS_SESSION_JWT,
} from "./constants.js";
import { useDispatch } from "react-redux";
import PageNotFound from "./components/pages/pageNotFound.js";
import { addCurrentUser, setAuthJwt } from "./redux/auth/authActions.js";
import Home from "./components/pages/home.js";

function App() {
  const dispatch = useDispatch();

  // check if session variable has jwt or not
  let session_jwt = localStorage.getItem(LS_SESSION_JWT);
  session_jwt = session_jwt !== null ? JSON.parse(session_jwt) : null;

  if (
    session_jwt !== null &&
    session_jwt.value.token !== null &&
    session_jwt.value.token !== "" &&
    session_jwt.expiry > new Date().getTime()
  ) {
    dispatch(setAuthJwt(session_jwt.value.token));

    // if jwt is available then we can check and store the current admin as well
    let current_user = localStorage.getItem(LS_CURRENT_USER);
    current_user = current_user !== null ? JSON.parse(current_user) : null;
    dispatch(addCurrentUser(current_user.value));
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to={LOGIN_ROUTE} />;
            }}
          />
          <Route path={LOGIN_ROUTE} exact component={Login} />
          <Route path={HOME_ROUTE} exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;