import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Link,
  Row,
  Col,Image
} from "react-bootstrap";
function NavbarComponent() {
  return (
    <>
      <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <Image className="nav-logo" src="/logo.png" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-item" href=""> CÁ NHÂN </Nav.Link>
              <Nav.Link className="nav-item" href=""> ĐIỀU KHOẢN </Nav.Link>
              <Nav.Link className="nav-item" href="">KHUYẾN MÃI</Nav.Link>
              <Nav.Link className="nav-item" href="">TIN TỨC</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">DỊCH VỤ THẺ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  CÁ NHÂN
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  DỊCH VỤ THẺ 
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  ĐIỀU KHOẢN
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">LOGIN</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
