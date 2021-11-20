import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
 
  Row,
  Col,Image
} from "react-bootstrap";
import {Link} from "react-router-dom"
function NavbarComponent() {
  return (
    <>
      <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Link to="/"> 
          <Navbar.Brand href="#home"> <Image className="nav-logo" src="/logo.png" alt="bank-logo" /> </Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-item" href=""> CÁ NHÂN </Nav.Link>
              <Nav.Link className="nav-item" href=""> ĐIỀU KHOẢN </Nav.Link>
              <Nav.Link className="nav-item" href="">KHUYẾN MÃI</Nav.Link>
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
              <Nav.Link href="/login"> <button type="button" class="btn btn-secondary">LOGIN</button> </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
