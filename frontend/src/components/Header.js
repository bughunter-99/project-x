import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/news">News</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cryptocurrencies">Cryptocurrency</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blogs">Blog</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/videos">Videos</Link>
            </Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={`/${userInfo.name}/profile`}>My Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as="button"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <Nav.Link>
                <Link to="/admin/blogs/new-post">New Blog</Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
