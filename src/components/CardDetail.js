import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams} from "react-router-dom";
import { detailCard } from "../actions/cardAction"
import $ from "jquery";
function CardDetail() {
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

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailCard(cardType, cardUrl))
    }, [dispatch,cardType,cardUrl]);
    const {  card } = useSelector(state => state.cardDetail)
    var isIssuing = 'Không';
    var maxPay = `${card.maxPay}`;
    console.log(card.maxPay);

    if (card.isIssuing) {
        isIssuing = 'Có';
    } else {
        isIssuing = 'Không';
    }


    function intDebitScreen() {
        return (
            <>
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




                                <h3 class="box-title mt-5">Thông tin chính</h3>
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-check text-success"></i>Tên thẻ: {card.cardName}</li>
                                    <li><i class="fa fa-check text-success"></i>Hạng thẻ: {card.cardRank}</li>
                                    <li><i class="fa fa-check text-success"></i>Nhà phát hành: {card.publisher}</li>

                                </ul>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <h3 class="box-title mt-5">General Info</h3>
                                <div class="table-responsive">
                                    <table class="table table-striped table-product">
                                        <tbody>
                                            <tr>
                                                <td>Loại thẻ</td>
                                                <td>{isIssuing}</td>
                                            </tr>
                                            <tr>
                                                <td width="390">Được phát hành</td>
                                                <td> {isIssuing}</td>
                                            </tr>
                                            <tr>
                                                <td>Hạng thẻ</td>
                                                <td>{card.cardRank}</td>
                                            </tr>
                                            <tr>
                                                <td>Hạn mức chuyển tiền</td>
                                                <td>{maxPay} VND</td>
                                            </tr>
                                            <tr>
                                                <td>Phí làm lại thẻ</td>
                                                <td>{card.issueFee}</td>
                                            </tr>
                                            <tr>
                                                <td>Phí hằng năm</td>
                                                <td>{card.yearlyFee}</td>
                                            </tr>
                                            <tr>
                                                <td>Phí chuyển tiền</td>
                                                <td>{card.exCurrency}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
            </>
        )


    }
    function intCreditScreen() {
        return (
            <div class="container">

                <div class="card-body">

                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center">
                                <img alt="detailimage"  src={card.image} class="img-responsive" /></div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h4 class="box-title mt-5">Thông tin thẻ</h4>
                            <p>{card.description}</p>




                            <h3 class="box-title mt-5">Thông tin chính</h3>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-check text-success"></i>Tên thẻ: {card.cardName}</li>
                                <li><i class="fa fa-check text-success"></i>Hạng thẻ: {card.cardRank}</li>
                                <li><i class="fa fa-check text-success"></i>Nhà phát hành: {card.publisher}</li>

                            </ul>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title mt-5">General Info</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-product">
                                    <tbody>
                                        <tr>
                                            <td>Loại thẻ</td>
                                            <td>{card.cardType}</td>
                                        </tr>
                                        <tr>
                                            <td width="390">Được phát hành</td>
                                            <td> {isIssuing}</td>
                                        </tr>
                                        <tr>
                                            <td>Hạng thẻ</td>
                                            <td>{card.cardRank}</td>
                                        </tr>
                                        <tr>
                                            <td>Điều kiện mở thẻ</td>
                                            <td>{card.condition}</td>
                                        </tr>
                                        <tr>
                                            <td>Ngày sao kê</td>
                                            <td>{card.statmentDay}</td>
                                        </tr>
                                        <tr>
                                            <td>Hạn mức tín dụng</td>
                                            <td>{card.creditLine} VND</td>
                                        </tr>
                                        <tr>
                                            <td>Thời gian trả</td>
                                            <td>{card.payWithin} VND</td>
                                        </tr>
                                        <tr>
                                            <td>Ngày tháng sau ngày đến hạn bắt đầu tính</td>
                                            <td>{card.interestRate} VND</td>
                                        </tr>
                                        <tr>
                                            <td>Phí làm lại thẻ</td>
                                            <td>{card.issueFee}</td>
                                        </tr>
                                        <tr>
                                            <td>Phí hằng năm</td>
                                            <td>{card.yearlyFee}</td>
                                        </tr>
                                        <tr>
                                            <td>Phí chuyển tiền</td>
                                            <td>{card.exCurrency}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    function domDebitScreen() {
        return (
            <div class="container">

                <div class="card-body">

                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center">
                                <img alt="detailimage"  src={card.image} class="img-responsive" /></div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h4 class="box-title mt-5">Thông tin thẻ</h4>
                            <p>{card.description}</p>




                            <h3 class="box-title mt-5">Thông tin chính</h3>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-check text-success"></i>Tên thẻ: {card.cardName}</li>
                                <li><i class="fa fa-check text-success"></i>Hạng thẻ: {card.cardRank}</li>
                                <li><i class="fa fa-check text-success"></i>Nhà phát hành: {card.publisher}</li>

                            </ul>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title mt-5">General Info</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-product">
                                    <tbody>
                                        <tr>
                                            <td>Loại thẻ</td>
                                            <td>{card.cardType}</td>
                                        </tr>
                                        <tr>
                                            <td width="390">Được phát hành</td>
                                            <td> {isIssuing}</td>
                                        </tr>
                                        <tr>
                                            <td>Hạng thẻ</td>
                                            <td>{card.cardRank}</td>
                                        </tr>
                                        <tr>
                                            <td>Nhà phát hành</td>
                                            <td>{card.publisher}</td>
                                        </tr>
                                        <tr>
                                            <td>Hạn mức tín dụng</td>
                                            <td>{card.creditLine} VND</td>
                                        </tr>
                                        <tr>
                                            <td>Thời gian trả</td>
                                            <td>{card.payWithin} VND</td>
                                        </tr>
                                        <tr>
                                            <td>Ngày tháng sau ngày đến hạn bắt đầu tính</td>
                                            <td>{card.interestRate} VND</td>
                                        </tr>
                                        <tr>
                                            <td>Phí làm lại thẻ</td>
                                            <td>{card.issueFee}</td>
                                        </tr>
                                        <tr>
                                            <td>Phí hằng năm</td>
                                            <td>{card.yearlyFee}</td>
                                        </tr>
                                        <tr>
                                            <td>Phí chuyển tiền</td>
                                            <td>{card.exCurrency}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
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
