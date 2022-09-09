import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import {
    LOGIN_ROUTE,
    LS_CURRENT_USER,
    LS_SESSION_JWT,
    HOME_ROUTE,
} from "../../constants";
import { removeCurrentUser, setAuthJwt } from "../../redux/auth/authActions";

const ProjectNavbar = () => {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    function handleLogout(e) {
        e.preventDefault();
        dispatch(setAuthJwt(null));
        dispatch(removeCurrentUser());
        localStorage.removeItem(LS_SESSION_JWT);
        localStorage.removeItem(LS_CURRENT_USER);

        history.push(LOGIN_ROUTE);
    }

    return (
        <div>
            <Navbar light expand="md" className="mt-2">
                <NavbarBrand href="/">
                    <p>LOGO</p>
                </NavbarBrand>
                <NavbarToggler
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                />
                <Collapse
                    isOpen={isOpen}
                    className="project-navbar-collapse mt-2"
                    navbar
                >
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href={HOME_ROUTE}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={HOME_ROUTE}>
                                Other pages
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown className="ml-auto" nav inNavbar>
                            <DropdownToggle nav caret>
                                {currentUser.first_name +
                                    " " +
                                    currentUser.last_name}
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink
                                            href={HOME_ROUTE.replace(
                                                ":id",
                                                currentUser.id
                                            )}
                                        >
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <NavLink
                                            href={LOGIN_ROUTE}
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
            <hr />
        </div>
    );
};

export default ProjectNavbar;