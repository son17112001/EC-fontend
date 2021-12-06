import React, { useState } from 'react'
import { CurrencyExchange, Paypal } from 'react-bootstrap-icons'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { init_DT_Service } from '../actions/userActions'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Loader from './Loader'
import Message from '../components/Message'

const DrawTab = () => {

    const dispatch = useDispatch()
    const [amountNumber, setAmountNumber] = useState(5)


    const userWithDraw = useSelector(state => state.userWithDraw)
    const { loading, res } = userWithDraw

    const [toVND, setToVND] = useState(0)
    const [exchangerate, setexChangerate] = useState(0)
    const [drawEmail, setDrawEmail] = useState('')

    const exCurrency = async () => {
        if (exchangerate === 0) {
            const { data } = await axios.get('https://api.exchangerate-api.com/v4/latest/USD')
            setexChangerate(data.rates.VND)
            setToVND((data.rates.VND * amountNumber).toFixed(2))
        }
        else {
            setToVND((exchangerate * amountNumber).toFixed(2))
        }
    }

    const drawHandler = (e) => {
        e.preventDefault()
        dispatch(init_DT_Service(amountNumber, 'withdraw-money', drawEmail))
    }


    return (
        <Form onSubmit={e => drawHandler(e)}>
            <h2>Rút Tiền</h2>
            <Form.Group as={Col} controlId="amount">
                <Form.Label style={{ color: 'gold' }}  >Nhập số dư xử lý giao dịch (mệnh giá: Dollar)</Form.Label>
                <Form.Control required type="number" value={amountNumber} onChange={e => setAmountNumber(e.target.value)}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="excurrency">
                <Form.Label style={{ color: 'gold' }}  >Quy đổi VNĐ (Chưa tính phí)</Form.Label>
                <Row>
                    <Col>
                        <Form.Control value={toVND} required type="number" disabled={true} />
                    </Col>
                    <Col>
                        <Button style={{ backgroundColor: 'darkturquoise', width: '100%' }}
                            onClick={exCurrency}><CurrencyExchange size={25} />  Quy đổi</Button>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group as={Col} controlId="emailPayPal">
                <Form.Label style={{ color: 'gold' }}  >Nhập email Paypal</Form.Label>
                <Form.Control required type="email" value={drawEmail} onChange={e => setDrawEmail(e.target.value)}
                />
            </Form.Group>

            <Button type='submit' className='my-3' style={{ backgroundColor: 'dodgerblue', width: '100%' }}><Paypal size={25} /> Xử lý </Button>

            {loading && <Loader />}
            {res.message && <Message variant='info'>{res.message}</Message>}
        </Form>
    )
}

export default DrawTab
