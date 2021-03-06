import React, { useState, useEffect } from 'react'
import { Nav, Col, Row, Tab, Container, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getUserProfile, logout, init_DT_Service } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";
import feEnv from "../../config/envfile"
import Loader from '../../components/Loader'
import { getAllCard } from '../../actions/managermentAction'
import { allPaymentGate } from "../../actions/managermentAction"
import { InfoUserOrder } from '../../components/InfoUserOrder'
import { initOrder } from '../../actions/orderActions'

const SupportScreen = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userProfile = useSelector(state => state.userProfile)
    const { loading, user, error } = userProfile

    const initializeOrder = useSelector(state => state.initializeOrder)
    const { loading: orderLoading, res, success } = initializeOrder

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const { allPaymentgate } = useSelector(state => state.getAllPaymentgate)
    const { allCard } = useSelector(state => state.getAllCard)

    const [cusCmt1, setCusCmt1] = useState('')
    const [cusCmt2, setCusCmt2] = useState('')

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
            else {
                dispatch(getAllCard()).then(dispatch(allPaymentGate()))
            }
        }
        // eslint-disable-next-line
    }, [dispatch, navigate, userInfo, user])

    //////////////Cancel gate
    const [selectedGate, setSelectedGate] = useState({})
    const [noti1, setNoti1] = useState('')
    const [verify1, setVerify1] = useState(false)

    const selectGate = (e) => {
        e.preventDefault()
        if (e.target.value === 'blankgate') {
            setSelectedGate({})
        }
        else {
            setSelectedGate(allPaymentgate.find(gate => gate._id === e.target.value))
        }
    }

    const handleVerify1 = () => {
        setVerify1(!verify1);
        setNoti2('')
    }

    const submitHandler1 = (e) => {
        e.preventDefault()
        if (verify1) {
            dispatch(initOrder({
                orderType: "paymentgateway-cancel",
                gateId: selectedGate._id,
                cusCmt: cusCmt1,
            }))
        } else {
            setNoti1('vui l??ng check reCaptcha')
        }
    }

    //////////////////cancel card
    const [selectedCard, setSelectedCard] = useState({})
    const [noti2, setNoti2] = useState('')
    const [verify2, setVerify2] = useState(false)

    const selectCard = (e) => {
        e.preventDefault()
        if (e.target.value === 'blankcard') {
            setSelectedCard({})
        }
        else {
            setSelectedCard(allCard.find(card => card._id === e.target.value))
        }
    }

    const handleVerify2 = () => {
        setVerify2(!verify2);
        setNoti2('')
    }

    const submitHandler2 = (e) => {
        e.preventDefault()
        if (verify2) {
            dispatch(initOrder({
                orderType: "card-cancel",
                cardId: selectedCard._id,
                cusCmt: cusCmt2,
            }))
        } else {
            setNoti2('vui l??ng check reCaptcha')
        }
    }

    /////////////////////debt payment
    const [amountNumber, setAmountNumber] = useState(50000)
    const [payDebtCard, setPayDebtCard] = useState({})
    const user_DT_services = useSelector(state => state.user_DT_services)
    const { loading: dtLoading, res: dtRes, errorRes } = user_DT_services

    const [noti3, setNoti3] = useState('')
    const [verify3, setVerify3] = useState(false)

    const selecPayDebtCard = (e) => {
        e.preventDefault()
        if (e.target.value === 'blankcard') {
            setPayDebtCard({})
        }
        else {
            setPayDebtCard(allCard.find(card => card._id === e.target.value))
        }
    }

    const paymentHandler = (e) => {
        e.preventDefault()
        if (verify3) {
            dispatch(init_DT_Service(amountNumber, 'debt-payment', payDebtCard))
        } else {
            setNoti3('vui l??ng check reCaptcha')
        }
    }

    const handleVerify3 = () => {
        setVerify3(!verify3);
        setNoti2('')
    }
    return (
        <Container className='my-5'>
            {loading && <Loader />}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Y??u c???u h???y c???ng thanh to??n</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Y??u c???u h???y th???</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Thanh to??n n??? t??n d???ng</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Form onSubmit={submitHandler1}>
                                    {user.name && InfoUserOrder(user)}
                                    <Row className="my-3">
                                        <Form.Group controlId="formGridCity">
                                            <Form.Label>Lo???i c???ng</Form.Label>
                                            <Form.Select name="type" id="type" onChange={selectGate}>
                                                <option value="blankgate">ch???n c???ng</option>
                                                {allPaymentgate && allPaymentgate.map(gate => {
                                                    return (<option value={gate._id}>{gate.isGlobal ? 'C???ng thanh to??n qu???c t???' : 'C???ng thanh to??n n???i ?????a'}</option>)
                                                })}
                                            </Form.Select >
                                        </Form.Group>
                                        {Object.keys(selectedGate).length !== 0 &&
                                            <Form.Group controlId="formGridCity">
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Key C???ng</Form.Label>
                                                        <Form.Control disabled type="text" value={`${selectedGate.apiKey.slice(0, 15) + '*******'}`} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Tr???ng th??i</Form.Label>
                                                        <Form.Control disabled type="text" value={selectedGate.isActive ? '??ang ho???t ?????ng' : 'D???ng ho???t ?????ng'} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Ng??y t???o</Form.Label>
                                                        <Form.Control disabled type="date" value={selectedGate.createdAt.slice(0, 10)} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Ng??y c???p nh???t</Form.Label>
                                                        <Form.Control disabled type="date" value={selectedGate.updatedAt.slice(0, 10)} />
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        }
                                        <Form.Group controlId="formGridCity">
                                            <Form.Label>Ghi ch?? cho ch??ng t??i</Form.Label>
                                            <Form.Control required as="textarea" style={{ height: '75px' }} placeholder="ghi ch??"
                                                value={cusCmt1} onChange={e => setCusCmt1(e.target.value)} />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <ReCAPTCHA sitekey={`${feEnv.RECAPTCHA_KEY}`} onChange={handleVerify1} />
                                        </Col>
                                        <Col>
                                            <Button type='submit' style={{ width: '100%' }}>G???i</Button>
                                        </Col>
                                    </Row>
                                </Form>
                                {noti1 && <Alert variant="warning"> {noti1}</Alert>}
                                {orderLoading ? <Loader />
                                    : success === true ? <Alert variant="success"> {res.message}</Alert>
                                        : success === false ? < Alert variant="danger"> {res.message}</Alert>
                                            : <></>}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Form onSubmit={submitHandler2}>
                                    {user.name && InfoUserOrder(user)}
                                    <Row className="my-3">
                                        <Form.Group controlId="formGridCity">
                                            <Form.Label>Ch???n Th???</Form.Label>
                                            <Form.Select name="type" id="type" onChange={selectCard}>
                                                <option value="blankcard">Ch???n Th???</option>
                                                {allCard && allCard.map(card => {
                                                    return (<option value={card._id}>{card.cardTypeId.cardName}</option>)
                                                })}
                                            </Form.Select >
                                        </Form.Group>
                                        {Object.keys(selectedCard).length !== 0 &&
                                            <Form.Group controlId="formGridCity">
                                                <Row>
                                                    <Col>
                                                        <Form.Label>S??? th???</Form.Label>
                                                        <Form.Control disabled type="text" value={`${'*******' + selectedCard.cardNumber.slice(-4)}`} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Tr???ng th??i</Form.Label>
                                                        <Form.Control disabled type="text" value={selectedCard.isActive ? '??ang ho???t ?????ng' : '???? kh??a'} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>H???n d??ng t???</Form.Label>
                                                        <Form.Control disabled type="date" value={selectedCard.validDate.slice(0, 10)} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Ng??y h???t h???n</Form.Label>
                                                        <Form.Control disabled type="date" value={selectedCard.expiredDate.slice(0, 10)} />
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        }
                                        <Form.Group controlId="formGridCity">
                                            <Form.Label>Ghi ch?? cho ch??ng t??i</Form.Label>
                                            <Form.Control required as="textarea" style={{ height: '75px' }} placeholder="ghi ch??"
                                                value={cusCmt2} onChange={e => setCusCmt2(e.target.value)} />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <ReCAPTCHA sitekey={`${feEnv.RECAPTCHA_KEY}`} onChange={handleVerify2} />
                                        </Col>
                                        <Col>
                                            <Button type='submit' style={{ width: '100%' }}>G???i</Button>
                                        </Col>
                                    </Row>
                                </Form>
                                {noti2 && <Alert variant="warning"> {noti2}</Alert>}
                                {orderLoading ? <Loader />
                                    : success === true ? <Alert variant="success"> {res.message}</Alert>
                                        : success === false ? < Alert variant="danger"> {res.message}</Alert>
                                            : <></>}
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Form onSubmit={paymentHandler}>
                                    <Row className="my-3">
                                        <Form.Group controlId="formGridCity">
                                            <Form.Label>Ch???n Th???</Form.Label>
                                            <Form.Select name="type" id="type" onChange={selecPayDebtCard}>
                                                <option value="blankcard">Ch???n Th???</option>
                                                {allCard && allCard.map(card => {
                                                    if (card.cardType === 'IntCredits') {
                                                        return (<option value={card._id}>{card.cardTypeId.cardName}</option>)
                                                    }
                                                    else return <></>
                                                })}
                                            </Form.Select >
                                        </Form.Group>
                                        {Object.keys(payDebtCard).length !== 0 &&
                                            <Form.Group controlId="formGridCity">
                                                <Row>
                                                    <Col>
                                                        <Form.Label>S??? th???</Form.Label>
                                                        <Form.Control disabled type="text" value={`${'*******' + payDebtCard.cardNumber.slice(-4)}`} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Tr???ng th??i</Form.Label>
                                                        <Form.Control disabled type="text" value={payDebtCard.isActive ? '??ang ho???t ?????ng' : '???? kh??a'} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>H???n d??ng t???</Form.Label>
                                                        <Form.Control disabled type="date" value={payDebtCard.validDate.slice(0, 10)} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Label>Ng??y h???t h???n</Form.Label>
                                                        <Form.Control disabled type="date" value={payDebtCard.expiredDate.slice(0, 10)} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>S??? n??? hi???n t???i</Form.Label>
                                                        <Form.Control disabled type="number" value={payDebtCard.debt} />

                                                        <Form.Label>Nh???p m???c n??? b???n mu???n thanh to??n (T???i thi???u: 50,000 VN??)</Form.Label>
                                                        <Form.Control min={50000} type="number" value={amountNumber} onChange={e => setAmountNumber(e.target.value)} />
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        }
                                    </Row>
                                    <Row>
                                        <Col>
                                            <ReCAPTCHA sitekey={`${feEnv.RECAPTCHA_KEY}`} onChange={handleVerify3} />
                                        </Col>
                                        <Col>
                                            <Button type='submit' style={{ width: '100%' }}>G???i</Button>
                                        </Col>
                                    </Row>
                                </Form>
                                {noti3 && <Alert variant="warning"> {noti3}</Alert>}
                                {dtLoading ? <Loader />
                                    : errorRes === false ? <Alert variant="success"> {dtRes.message}</Alert>
                                        : errorRes === true ? < Alert variant="danger"> {dtRes.message}</Alert>
                                            : <></>}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container >
    )
}

export default SupportScreen
