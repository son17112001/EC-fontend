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
function CardScreen() {
  const dispatch = useDispatch(); //backend

  const { loading, error, cards } = useSelector((state) => state.cardList);
  console.log(cards);
  const { intCredits, intDebits, domDebits } = cards;
  useEffect(() => {
    dispatch(listCard());
  }, [dispatch]);
  const mang1 = [1, 2, 4, 4];

  return (
    <>
      <Container className="my-6">
        {loading && <Loading />}
        <Row className="card-item">
          <h2>Credit Card </h2>
          {intCredits &&
            intCredits.map((card) => (
              <Col xs="8" md="6" className="py-3">
                <OneCard card={card} />
              </Col>
            ))}
        </Row>
        <Row className="card-item">
          <h2>Debit Card </h2>
          {intDebits &&
            intDebits.map((card) => (
              <Col xs="8" md="6" className="py-3">
                <OneCard card={card} />
              </Col>
            ))}
        </Row>
        <Row className="card-item">
          <h2>Dom Debit Card </h2>
          {domDebits &&
            domDebits.map((card) => (
              <Col xs="8" md="6" className="py-3">
                <OneCard card={card} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default CardScreen;
