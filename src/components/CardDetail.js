import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate,useParams,useLocation} from "react-router-dom";
import {detailCard} from "../actions/cardAction"
function CardDetail() {
  const cardUrl = useParams().cardUrl;
  const cardType= useParams().cardType;
  

  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(detailCard(cardType,cardUrl))
  }, []);
  const {loading, card} =useSelector(state=>state.cardDetail)
  return (
    <>     
   
        <Row>
          <Col md={6}>
               <Image src={card.image} style={{width:"100%"}} alt={card.cardName} fluid/>
          </Col>
          <Col>
          <ListGroup variant='flush'>
                 <ListGroupItem>
                   <h2>{card.cardName}</h2>
                 </ListGroupItem>
                 <ListGroupItem>
                   <h3>This reviews</h3>
                 </ListGroupItem>
                 <ListGroupItem>
                   Description:{card.description}
                 </ListGroupItem>
          </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
               <ListGroup>
                 <ListGroupItem>
                   <Row>
                     <Col><strong>Price:</strong>
                     </Col>
                     <Col><strong>${card.name}</strong></Col>
                   </Row>
                 </ListGroupItem>
               </ListGroup>
            </Card>
          </Col>
        </Row>
                <div class="container">
           
                <div class="card-body">
                    <h3 class="card-title">Rounded Chair</h3>
                    <h6 class="card-subtitle">globe type chair for rest</h6>
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center">
                              <img src={card.image} class="img-responsive"/></div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h4 class="box-title mt-5">Card description</h4>
                            <p>{card.description}</p>
                            
                     
                            
                         
                            <h3 class="box-title mt-5">Key Highlights</h3>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-check text-success"></i>Sturdy structure</li>
                                <li><i class="fa fa-check text-success"></i>Designed to foster easy portability</li>
                                <li><i class="fa fa-check text-success"></i>Perfect furniture to flaunt your wonderful collectibles</li>
                            </ul>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title mt-5">General Info</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-product">
                                    <tbody>
                                        <tr>
                                            <td width="390">Brand</td>
                                            <td>Stellar</td>
                                        </tr>
                                        <tr>
                                            <td>Delivery Condition</td>
                                            <td>Knock Down</td>
                                        </tr>
                                        <tr>
                                            <td>Seat Lock Included</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Type</td>
                                            <td>Office Chair</td>
                                        </tr>
                                        <tr>
                                            <td>Style</td>
                                            <td>Contemporary&amp;Modern</td>
                                        </tr>
                                        <tr>
                                            <td>Wheels Included</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Upholstery Included</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Upholstery Type</td>
                                            <td>Cushion</td>
                                        </tr>
                                        <tr>
                                            <td>Head Support</td>
                                            <td>No</td>
                                        </tr>
                                        <tr>
                                            <td>Suitable For</td>
                                            <td>Study&amp;Home Office</td>
                                        </tr>
                                        <tr>
                                            <td>Adjustable Height</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Model Number</td>
                                            <td>F01020701-00HT744A06</td>
                                        </tr>
                                        <tr>
                                            <td>Armrest Included</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Care Instructions</td>
                                            <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                                        </tr>
                                        <tr>
                                            <td>Finish Type</td>
                                            <td>Matte</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </>
  );
}
export default CardDetail;
