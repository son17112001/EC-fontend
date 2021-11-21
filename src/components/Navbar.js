import React from "react";
<<<<<<< HEAD
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
 
  Row,
  Col,Image
} from "react-bootstrap";
import {Link} from "react-router-dom"
=======
import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { logout } from "../actions/userActions";
>>>>>>> Login/Regis
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
<<<<<<< HEAD
          <Link to="/"> 
          <Navbar.Brand href="#home"> <Image className="nav-logo" src="/logo.png" alt="bank-logo" /> </Navbar.Brand></Link>
=======
          <Navbar.Brand href="/"> <Image className="nav-logo" src="/logo.png" /> </Navbar.Brand>
>>>>>>> Login/Regis
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-item" href="/profile"> CÁ NHÂN </Nav.Link>
              <Nav.Link className="nav-item" href=""> ĐIỀU KHOẢN </Nav.Link>
              <Nav.Link className="nav-item" href="">KHUYẾN MÃI</Nav.Link>
              <Nav.Link className="nav-item" href="/card">DỊCH VỤ THẺ</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">DỊCH VỤ THẺ</NavDropdown.Item>
                <NavDropdown.Item href="">
                  CÁ NHÂN
                </NavDropdown.Item>
<<<<<<< HEAD
                <NavDropdown.Item href="">
                  DỊCH VỤ THẺ 
=======
                <NavDropdown.Item href="#action/3.3">
                  DỊCH VỤ THẺ
>>>>>>> Login/Regis
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">
                  ĐIỀU KHOẢN
                </NavDropdown.Item>
              </NavDropdown> 
            </Nav>

            <Nav>
<<<<<<< HEAD
              <Nav.Link href="/login"> <button type="button" class="btn btn-secondary">LOGIN</button> </Nav.Link>
             
=======
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login">LOGIN</Nav.Link>
              )}

>>>>>>> Login/Regis
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
