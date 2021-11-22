import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button, Row, Col, Alert } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { submitPayment } from '../actions/userActions'
import { ArrowBarRight } from 'react-bootstrap-icons'

const SubChargeScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const curURL = useLocation().search;

    const paymentId = new URLSearchParams(curURL).get('paymentId');
    const token = new URLSearchParams(curURL).get('token');
    const PayerID = new URLSearchParams(curURL).get('PayerID');

    const userSubPayment = useSelector(state => state.userSubPayment)
    const { loading, errorRes, successRes } = userSubPayment
    useEffect(() => {
        if (!paymentId && !token && !PayerID) {
            navigate('/')
        }
        else {
            dispatch(submitPayment(paymentId, PayerID))
            if (!loading) {
                setTimeout(function () {
                    window.location.href = '/profile';
                }, 10000);
            }
        }
    }, [navigate, paymentId, token, PayerID])

    return (
        <Container style={{ marginTop: 110 }}>
            <Row className='justify-content-center pt-5'>
                <Col xs={12} md={8} lg={6}>
                    {successRes && (<Alert className='justify-content-center' variant='success'>{successRes.message}&#160;&#160;&#160;
                        <Alert.Link href="/">Trở lại trang cá nhân trong 10 giây </Alert.Link></Alert>
                    )}
                    {errorRes && <Alert className='justify-content-center' variant='danger'>{errorRes.message}&#160;&#160;&#160;
                        <Alert.Link href="/">Go back to homepage</Alert.Link></Alert>}
                    {loading && <Loader />}
                </Col>
            </Row>
        </Container >
    )
}

export default SubChargeScreen;
