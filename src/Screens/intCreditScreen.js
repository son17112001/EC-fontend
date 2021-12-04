import React, { useEffect } from "react";
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
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import OneCard from "../components/OneCard";
import { listCard } from "../actions/cardAction";
import Loading from "../components/Loading";
import Message from "../components/Message";
function IntCreditScreen() {
  const dispatch = useDispatch(); //backend

  const { loading, error, cards } = useSelector((state) => state.cardList);

  const { intCredits } = cards;
  useEffect(() => {
    dispatch(listCard());
  }, [dispatch]);
  
  return (
    
    <>
      <Container className="my-6">
        {loading && <Loading />}
        <Row className="card-item">
          <h2>Credit Card </h2>
          {intCredits &&
            intCredits.map((card) => (
              <Col xs="8" md="6" className="py-3">
                <OneCard card={card} cardType="intCredits" />
              </Col>
            ))}
        </Row>
        
      </Container>
    </>
  );
}

export default IntCreditScreen;
