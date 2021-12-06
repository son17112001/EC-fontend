import React from "react";
import {Link} from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { logout } from "../actions/userActions";

function NavbarComponent() {

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>

          <Link to="/"> 
          <Navbar.Brand href="#home"> <Image className="nav-logo" src="/logo.png" alt="bank-logo" /> </Navbar.Brand></Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-item" href="/profile"> CÁ NHÂN </Nav.Link>
              <Nav.Link className="nav-item" href="/#"> ĐIỀU KHOẢN </Nav.Link>
              <Nav.Link className="nav-item" href="/history">LỊCH SỬ</Nav.Link>
              <Nav.Link className="nav-item" href="/card">DỊCH VỤ THẺ</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">DỊCH VỤ THẺ</NavDropdown.Item>
                <NavDropdown.Item href="">
                  CÁ NHÂN
                </NavDropdown.Item>

                <NavDropdown.Item href="">
                  DỊCH VỤ THẺ 

                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">
                  ĐIỀU KHOẢN
                </NavDropdown.Item>
              </NavDropdown> 
            </Nav>

            <Nav>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav>
                  <Nav.Link href="/login">LOGIN</Nav.Link>
                  <Nav.Link href="/register">SIGN UP</Nav.Link>
                </Nav>

              )}


            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
