import React, { useEffect, useState } from "react";
// import cards from "../data/Card";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Link,
  Row,
  Col,
  Card,
  Dropdown,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import OneCard from "../components/OneCard";
import { listCard } from "../actions/cardAction";
import Loading from "../components/Loading";
import Message from "../components/Message";
function IntCreditScreen() {
  const dispatch = useDispatch(); //backend
  const { loading, error, cards } = useSelector((state) => state.cardList);
  const {intCredits}=cards;
  const [save,setSave]= useState([]);
 
  
  useEffect(()=>{
    dispatch(listCard());
    
  },[])
  useEffect(()=>{
    setSave(intCredits);
  },[intCredits])
 


 
  function filterCard(type) {
    if (save) {
      if (type === "Gold") {
        let result  = intCredits.filter((c) => c.cardRank === "Gold");
        setSave(result);
        
      }
      if (type === "Standard") {
        let result  = intCredits.filter((c) => c.cardRank === "Standard");
        setSave(result);
        
      }

      if (type === "MasterCard") {
        let result  = intCredits.filter((c) => c.publisher === "MasterCard");
        setSave(result);
        
      }
      if (type === "VISA") {
        let result  = intCredits.filter((c) => c.publisher === "VISA");
        setSave(result);
        
      }
      if (type === "All") {
        setSave(cards.intDebits);
      }
  }
}
  return (
    
    <>
      <Container className="">
        {loading && <Loading />}
        
        <Dropdown className="d-inline" style={{marginRight:"3px"}}>
            {" "}
            Bộ lọc
            <Button
              variant="info"
              style={{ marginLeft: "15px" }}
              onClick={(e) => {
                filterCard("All");
              }}
            
            >
              Tất cả
            </Button>{" "}
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Hạng thẻ
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={(e) => {
                  filterCard("Gold");
                }}
              >
                Gold
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  filterCard("Standard");
                }}
              >
                Standard
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline">
            <Dropdown.Toggle variant="success" id="dropdown-basic1">
              Nhà phát hành
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={(e) => {
                  filterCard("MasterCard");
                }}
              >
                Master Card
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  filterCard("VISA");
                }}
              >
                Visa
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

                
                    
        <Row className="card-item">
          <h2>International Debit Card </h2>
         
          {save ? save.map((card) => (
              <Col xs="8" md="6" className="py-3">
                <OneCard card={card} cardType="intCredits" />
              </Col>
            )):  <Loading />}
        </Row>
        
      </Container>
    </>
  );
}


export default IntCreditScreen;
