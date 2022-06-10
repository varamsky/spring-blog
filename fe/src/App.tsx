import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';
import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from './constants';
import Home from './components/pages/home';
import PageNotFound from './components/pages/pageNotFound';
import Profile from './components/pages/profile';
import Login from './components/pages/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to={LOGIN_ROUTE} />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={PROFILE_ROUTE} element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
