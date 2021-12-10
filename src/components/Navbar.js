import React, { useState } from "react";
import {Link} from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Nav, NavDropdown, Image,Button } from "react-bootstrap";
import { logout } from "../actions/userActions";
import {useLocation,useNavigate} from "react-router-dom"

function NavbarComponent() {

  const dispatch = useDispatch()
  const location= useLocation();
  const navigate= useNavigate();
  const userLogin = useSelector(state => state.userLogin)
  
  const { userInfo } = userLogin
  const [search,setSearch]=useState();
  const logoutHandler = () => {
    dispatch(logout())
  }

  const handlerSearch =()=>{  
      
      navigate(`/find/:${search}`);
  }
  return (
    <>
      {location.pathname!=='/admin'&& location.pathname!=='/admin/control/user'  && ( <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="primary" variant="dark">
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
          <div className="input-group rounded">
                      <input type="search" className="form-control rounded" placeholder="Tìm tên thẻ" aria-label="Search" aria-describedby="search-addon" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                      <span className="input-group-text border-0" id="search-addon">
                      <Button onClick={handlerSearch}><i className="fas fa-search" /> </Button> 
                      </span>
                      
                    </div>


                         
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
      </Navbar>)}
     
    </>
  );
}

export default NavbarComponent;
