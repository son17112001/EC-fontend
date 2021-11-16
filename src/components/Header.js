import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Link,
  Row,
  Col,
} from "react-bootstrap";

function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="main-info">
          <Container> <Row className="my-6">
            <h2> ONLINE <br /> MONEY TRANSFER</h2>{" "}
          </Row>
          <Row>
            <Col xs="5" md ="4" className="mt-4">  <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s{" "}
            </p> </Col>
          
          </Row></Container>
         
        </div>
      </div>
    </>
  );
}

export default Header;
