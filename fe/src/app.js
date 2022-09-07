import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/pages/login.js";
import {
  LOGIN_ROUTE,
  LS_CURRENT_USER,
  LS_SESSION_JWT,
} from "./constants.js";
import { useDispatch } from "react-redux";
import PageNotFound from "./components/pages/pageNotFound.js";

function App() {
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
                  <Route component={PageNotFound} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;