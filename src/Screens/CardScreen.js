import React,{useEffect} from "react";
import listCard from "../data/Card";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Link,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch,useSelector} from "react-redux";
import OneCard from "../components/OneCard";
// import { listCard } from "../actions/cardAction"; noi voi backend
function CardScreen() {
    // const dispatch= useDispatch();
    // const {loading, error, cards} = useSelector(state=>state.cardList)
    // useEffect(()=>{
    //   dispatch(listCard())
    // },[dispatch])
    
  return (
    
    <>
      <Container className ="my-6">
        <Row className="card-item">
          <h2>Credit Card </h2>
          {listCard.intCredit.map((card) => (
            <Col xs="8" md ="6" className="py-3">
              
              <OneCard card={card} />
            </Col>
          ))}
        </Row>
        <Row className="card-item">
          <h2>Debit Card </h2>
          {listCard.intDebit.map((card) => (
            <Col xs="8" md ="6" className="py-3">
              
              <OneCard card={card} />
            </Col>
          ))}
        </Row>
        <Row className="card-item">
          <h2>Dom Debit </h2>
          {listCard.domDebit.map((card) => (
            <Col xs="8" md ="6" className="py-3">
              
              <OneCard card={card} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CardScreen;
