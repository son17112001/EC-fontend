import React, { useEffect, useState } from 'react'
import { Container, Image, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
import feEnv from "../../config/envfile"
import Loader from "../../components/Loader";
import { getUserProfile, logout } from '../../actions/userActions';
import { initOrder } from '../../actions/orderActions';
import { InfoUserOrder } from '../../components/InfoUserOrder'

const InitGateScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [initGate, SetInitGate] = useState(false)
    const [globalGate, SetGlobalGate] = useState(false)
    const [cusCmt, setCusCmt] = useState('')
    const [noti, setNoti] = useState('')
    const [verify, setVerify] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const initializeOrder = useSelector(state => state.initializeOrder)
    const { loading: orderLoading, res, success } = initializeOrder
    const userProfile = useSelector(state => state.userProfile)
    const { loading, user, error } = userProfile

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        else {
            if (Object.keys(user).length === 0) {
                dispatch(getUserProfile())
            }
            else if (error && error.message === 'Unauthorized token') {
                dispatch(logout('logout'))
            }
        }
        // eslint-disable-next-line
    }, [dispatch, navigate, userInfo, user])

    const startOpenGate = (e) => {
        e.preventDefault()
        SetInitGate(true)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (verify) {
            dispatch(initOrder({
                orderType: "paymentgateway-init",
                globalGate, cusCmt
            }))
        } else {
            setNoti('vui l??ng check reCaptcha')
        }
    }

    const handleVerify = () => {
        setVerify(!verify);
        setNoti('')
    }
    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <Image src='https://kartpay.com/assets/v2/img/hero-img2.png'></Image>
                </Col>
                <Col >
                    {!initGate && <Form.Group style={{ textAlign: 'center' }} controlId="initgate">
                        <h2 className='mb-3'>????ng k?? c???ng thanh to??n</h2>
                        <p>N???u b???n ??ang c?? m???t website b??n h??ng v?? mu???n t??ch h???p d???ch v??? c???ng thanh to??n th??? v??o c???a h??ng c???a m??nh th?? h??y nhan nhanh tay ????ng k??</p>
                        <Button onClick={startOpenGate}>Ti???n h??nh m??? c???ng thanh to??n</Button>
                    </Form.Group>}
                    {loading && <Loader />}
                    {initGate && user.name &&
                        < Form onSubmit={submitHandler} className='mt-5' style={{ textAlign: 'center' }} controlId="initgate">
                            {InfoUserOrder(user)}
                            <Col>
                                <Form.Label>Thu Nh???p</Form.Label>
                                <Form.Control disabled value={user.job.salary} placeholder="salary" />
                            </Col>
                            <Form.Group as={Col} id="gatetype">
                                <Form.Label >Ch???n lo???i c???ng thanh to??n</Form.Label>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <Form.Check style={{ color: 'springgreen' }} type="radio" label="Qu???c t???" checked={globalGate === true}
                                        onChange={() => SetGlobalGate(true)} />
                                    <Form.Check style={{ color: 'springgreen' }} type="radio" label="N???i ?????a" checked={globalGate === false}
                                        onChange={() => SetGlobalGate(false)} />
                                </div>
                            </Form.Group>
                            <Row className="my-3">
                                <Form.Group controlId="formGridCity">
                                    <Form.Label>Ghi ch?? cho ch??ng t??i</Form.Label>
                                    <Form.Control required as="textarea" style={{ height: '75px' }} placeholder="ghi ch??"
                                        value={cusCmt} onChange={e => setCusCmt(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col>
                                    <ReCAPTCHA sitekey={`${feEnv.RECAPTCHA_KEY}`} onChange={handleVerify} />
                                </Col>
                                <Col>
                                    <Button type='submit' style={{ width: '100%' }}>Submit</Button>
                                </Col>
                            </Row>
                            {noti && <Alert variant="warning"> {noti}</Alert>}
                            {orderLoading ? <Loader />
                                : success === true ? <Alert variant="success"> {res.message}</Alert>
                                    : success === false ? < Alert variant="danger"> {res.message}</Alert>
                                        : <></>}
                        </Form>
                    }
                </Col>
            </Row>
        </Container >
    )
}

export default InitGateScreen
