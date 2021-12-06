import React from "react";
import { Row, Col } from "react-bootstrap";

import { Container } from "react-bootstrap";
import Header from "../components/Header";

function HomeScreen() {


  return (
    <>
      <Header />
      <Container> 
        <Row className="mt-4">  <Col><h2>Dịch vụ thẻ </h2> </Col> 
        <Col > <button type="button" class="btn btn-primary fa-pull-right">Xem thêm chi tiết </button></Col> 
        </Row>
         
       <Row>  
         <div className="container card-info">
         
         <div className="d-lg-flex">
           <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
             <div className="backgroundEffect" />
             <div className="pic">
               <img className src="/card/intCredit.jpg" alt='intcredit' />
               <div className="date">
                 <span className="month">Credit</span>
               </div>
             </div>
             <div className="content">
               <p className="h-1 mt-4">Thẻ tín dụng VPBank Shopee Platinum</p>
               <p className="text-muted mt-3">
                 Freeship cả năm, 365 ngày hoàn tiền
               </p>
               <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                 <div className="btn btn-primary">
                   Xem thêm
                   <span className="fas fa-arrow-right" />
                 </div>
                 <div className="d-flex align-items-center justify-content-center foot">
                   <p className="ps-3 icon text-muted">
                     <span className="fas fa-comment-alt pe-1" />5
                   </p>
                 </div>
               </div>
             </div>
           </div>
           <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
             <div className="backgroundEffect" />
             <div className="pic">
               <img className src="/card/intDebit.jpg" alt='intdebit' />
               <div className="date">
                 <span className="month">Debit</span>
               </div>
             </div>
             <div className="content">
               <p className="h-1 mt-4">Thẻ ghi nợ nội địa AutoLink</p>
               <p className="text-muted mt-3">
                 Thẻ ghi nợ nội địa Autolink VPBank giúp bạn dễ dàng thực hiện
                 các giao dịch nội địa với mạng lưới ATM rộng lớn
               </p>
               <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                 <div className="btn btn-primary">
                   Xem thêm
                   <span className="fas fa-arrow-right" />
                 </div>
                 <div className="d-flex align-items-center justify-content-center foot">
                   <p className="ps-3 icon text-muted">
                     <span className="fas fa-comment-alt pe-1" />2
                   </p>
                 </div>
               </div>
             </div>
           </div>
           <div className="card border-0 mb-lg-0 mb-4">
             <div className="backgroundEffect" />
             <div className="pic">
               <img className src="/card/domDebit.png" alt='domdebit' />
               <div className="date">
                 <span className="month">Debit</span>
               </div>
             </div>
             <div className="content">
               <p className="h-1 mt-4">Thẻ ghi nợ quốc tế VPBank Diamond</p>
               <p className="text-muted mt-3">
                 Tấm thẻ đen quyền lực dành riêng cho Khách hàng Ưu tiên VPBank
                 Diamond với tính năng hoàn tiền đến 1,2% sẽ giúp Quý khách trở
                 thành tâm điểm
               </p>
               <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                 <div className="btn btn-primary">
                   Xem thêm
                   <span className="fas fa-arrow-right" />
                 </div>
                 <div className="d-flex align-items-center justify-content-center foot">
                   <p className="ps-3 icon text-muted">
                     <span className="fas fa-comment-alt pe-1" />3
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div></Row>
      </Container>
    </>
  );
}

export default HomeScreen;
