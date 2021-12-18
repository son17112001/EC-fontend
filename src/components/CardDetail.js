import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { useParams, useNavigate } from "react-router-dom";
import { detailCard } from "../actions/cardAction"

import $ from "jquery";
function CardDetail() {

    const navigate = useNavigate()
    const curURL = useLocation().pathname;

    const cardUrl = useParams().cardUrl;
    const cardType = useParams().cardType;

    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
    const { card, error } = useSelector(state => state.cardDetail)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailCard(cardType, cardUrl))
    }, [dispatch, navigate, cardType, cardUrl]);

    var maxPay = `${card.maxPay}`;
    //console.log(card.maxPay);

    const regisCard = (e) => {
        e.preventDefault()
        navigate(`/login?redirect=${curURL}/init-card`)
    }

    function intDebitScreen() {
        return (
            <>
                {!error &&
                    <div class="container">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-5 col-md-5 col-sm-6">
                                    <div class="white-box text-center">
                                        <img alt="detailimage" src={card.image} class="img-responsive" /></div>
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-6">
                                    <h4 class="box-title mt-5">Thông tin thẻ</h4>
                                    <p>{card.description}</p>

                                    <h3 class="box-title mt-5">Thông tin chính ({card.isIssuing ? 'Đang phát hàng' : 'Dừng phát hành'})</h3>
                                    <ul class="list-unstyled">
                                        <li><i class="fa fa-check text-success"></i>Tên thẻ: {card.cardName}</li>
                                        <li><i class="fa fa-check text-success"></i>Hạng thẻ: {card.cardRank}</li>
                                        <li><i class="fa fa-check text-success"></i>Nhà phát hành: {card.publisher}</li>
                                        <Button style={{ backgroundColor: 'palevioletred', width: '50%' }}
                                            variant="primary" type="submit"
                                            onClick={regisCard}
                                            disabled={!card.isIssuing}>Đăng ký thẻ</Button>

                                    </ul>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <h3 class="box-title mt-5">Thông tin chi tiết</h3>
                                    <div class="table-responsive">
                                        <table class="table table-striped table-product">
                                            <tbody>
                                                <tr>
                                                    <td>Loại thẻ</td>
                                                    <td>Thẻ ghi nợ Quốc Tế</td>
                                                </tr>
                                                <tr>
                                                    <td>Nhà phát hành</td>
                                                    <td>{card.publisher}</td>
                                                </tr>
                                                <tr>
                                                    <td>Hạng thẻ</td>
                                                    <td>{card.cardRank}</td>
                                                </tr>
                                                <tr>
                                                    <td>Phí hằng năm</td>
                                                    <td>{card.yearlyFee} VNĐ</td>
                                                </tr>
                                                <tr>
                                                    <td>Phí phát hành</td>
                                                    <td>{card.issueFee} VNĐ</td>
                                                </tr>
                                                <tr>
                                                    <td>Phí hằng năm</td>
                                                    <td>{card.yearlyFee} VNĐ</td>
                                                </tr>
                                                <tr>
                                                    <td>Giới hạn sử dụng</td>
                                                    <td>{card.maxPay} VNĐ / 1 ngày</td>
                                                </tr>
                                                <tr>
                                                    <td>Phí chuyển đổi ngoại tệ</td>
                                                    <td>{card.exCurrency * 100}% / 1 giao dịch</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
            </>
        )


    }
    function intCreditScreen() {
        return (
            <div class="container">
                {!error && <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center">
                                <img alt="detailimage" src={card.image} class="img-responsive" /></div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h4 class="box-title mt-5">Thông tin thẻ</h4>
                            <p>{card.description}</p>

                            <h3 class="box-title mt-5">Thông tin chính ({card.isIssuing ? 'Đang phát hàng' : 'Dừng phát hành'})</h3>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-check text-success"></i>Tên thẻ: {card.cardName}</li>
                                <li><i class="fa fa-check text-success"></i>Hạng thẻ: {card.cardRank}</li>
                                <li><i class="fa fa-check text-success"></i>Nhà phát hành: {card.publisher}</li>
                                <li><i class="fa fa-check text-success"></i>Trạng thái: {card.isIssuing ? 'Đang phát hàng' : 'Dừng phát hành'}</li>
                                <Button style={{ backgroundColor: 'palevioletred', width: '50%' }}
                                    variant="primary" type="submit"
                                    onClick={regisCard}
                                    disabled={!card.isIssuing}>Đăng ký thẻ</Button>

                            </ul>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title mt-5">Thông tin chi tiết</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-product">
                                    <tbody>
                                        <tr>
                                            <td>Loại thẻ</td>
                                            <td>Thẻ tín dụng Quốc Tế</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà phát hành</td>
                                            <td> {card.publisher}</td>
                                        </tr>
                                        <tr>
                                            <td>Hạng thẻ</td>
                                            <td>{card.cardRank}</td>
                                        </tr>
                                        <tr>
                                            <td>Điều kiện mở thẻ</td>
                                            <td>Mức thu nhập trung bình khoảng: {card.condition} VNĐ / tháng</td>
                                        </tr>
                                        <tr>
                                            <td>Ngày sao kê</td>
                                            <td>Ngày {card.statmentDay} hằng tháng</td>
                                        </tr>
                                        <tr>
                                            <td>Thời hạn giải ngân</td>
                                            <td>Sau ngày sao kê {card.payWithin} ngày</td>
                                        </tr>
                                        <tr>
                                            <td>Hạn mức tín dụng</td>
                                            <td>{card.creditLine} VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td>Lãi suất</td>
                                            <td>{card.interestRate * 100}% / tháng</td>
                                        </tr>
                                        <tr>
                                            <td>Phí phát hành</td>
                                            <td>{card.issueFee} VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td>Phí hằng năm</td>
                                            <td>{card.yearlyFee} VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td>Phí chuyển đổi ngoại tệ</td>
                                            <td>{card.exCurrency * 100}% / 1 giao dịch</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>}
            </div >
        )
    }
    function domDebitScreen() {
        return (
            <div class="container">
                {!error && <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center">
                                <img alt="detailimage" src={card.image} class="img-responsive" /></div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h4 class="box-title mt-5">Thông tin thẻ</h4>
                            <p>{card.description}</p>

                            <h3 class="box-title mt-5">Thông tin chính ({card.isIssuing ? 'Đang phát hàng' : 'Dừng phát hành'})</h3>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-check text-success"></i>Tên thẻ: {card.cardName}</li>
                                <li><i class="fa fa-check text-success"></i>Hạng thẻ: {card.cardRank}</li>
                                <li><i class="fa fa-check text-success"></i>Nhà phát hành: {card.publisher}</li>
                                <Button style={{ backgroundColor: 'palevioletred', width: '50%' }}
                                    variant="primary" type="submit"
                                    onClick={regisCard}
                                    disabled={!card.isIssuing}>Đăng ký thẻ</Button>

                            </ul>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title mt-5">Thông tin chi tiết</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-product">
                                    <tbody>
                                        <tr>
                                            <td>Loại thẻ</td>
                                            <td>Thẻ ghi nợ nội địa</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà phát hành</td>
                                            <td>{card.publisher}</td>
                                        </tr>
                                        <tr>
                                            <td>Hạng thẻ</td>
                                            <td>{card.cardRank}</td>
                                        </tr>
                                        <tr>
                                            <td>Phí phát hành</td>
                                            <td>{card.issueFee} VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td>Phí hằng năm</td>
                                            <td>{card.yearlyFee} VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td>Mức sử dụng tố đa trong một ngày</td>
                                            <td>{card.maxPay} VNĐ</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
    return (
        <>
            {card.cardType === 'intDebits' && intDebitScreen()}
            {card.cardType === 'intCredits' && intCreditScreen()}
            {card.cardType === 'domDebits' && domDebitScreen()}
        </>
    );
}
export default CardDetail;
