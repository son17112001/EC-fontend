import React, { useEffect,useState } from "react";
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
  Button
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import OneCard from "../components/OneCard";
import { listCard } from "../actions/cardAction";
import Loading from "../components/Loading";
import Message from "../components/Message";
function DomDebitScreen() {
  const dispatch = useDispatch(); //backend
  const { loading, error, cards } = useSelector((state) => state.cardList);
  var {domDebits} = cards;
  useEffect(() => {
    dispatch(listCard());
    setCard(domDebits);
  }, [dispatch]);
  
  const [_card, setCard] = useState();

  if (domDebits) {
    var result = domDebits;
  }
  function filterCard(type) {
    if (domDebits) {
      if (type === "Gold") {
        result = _card.filter((c) => c.cardRank === "Gold");

        setCard(result);
      }
      if (type === "Standard") {
        result = _card.filter((c) => c.cardRank === "Standard");

        setCard(result);
      }

      if (type === "MasterCard") {
        result = _card.filter((c) => c.publisher === "MasterCard");

        setCard(result);
      }
      if (type === "VISA") {
        result = _card.filter((c) => c.publisher === "VISA");

        setCard(result);
      }
      if (type === "All") {
        setCard(cards.domDebits);
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
              onLoad={(e) => {
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
         
          {_card &&
            _card.map((card) => (
              <Col xs="8" md="6" className="py-3">
                <OneCard card={card} cardType="domDebits" />
              </Col>
            ))}
        </Row>
        
      </Container>
    </>
  );
}

export default DomDebitScreen;
