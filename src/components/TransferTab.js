import React, { useState } from 'react'
import { Translate } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { init_DT_Service } from '../actions/userActions'
import { Form, Button, Col } from 'react-bootstrap'
import Loader from './Loader'
import Message from '../components/Message'

const TransferTab = () => {

    const dispatch = useDispatch()
    const [amountNumber, setAmountNumber] = useState(5)


    const userWithDraw = useSelector(state => state.userWithDraw)
    const { loading, res } = userWithDraw

    const [accNumber, setAccNumber] = useState('')


    const transferHandler = (e) => {
        e.preventDefault()
        dispatch(init_DT_Service(amountNumber, 'transfer', accNumber))
    }


    return (
        <Form onSubmit={e => transferHandler(e)}>
            <h2>Chuyển Khoản</h2>
            <Form.Group as={Col} controlId="amount">
                <Form.Label style={{ color: 'gold' }}  >Nhập số dư xử lý giao dịch (mệnh giá: VNĐ)</Form.Label>
                <Form.Control required type="number" value={amountNumber} onChange={e => setAmountNumber(e.target.value)}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="accNumber">
                <Form.Label style={{ color: 'gold' }}  >Nhập số tài khoản</Form.Label>
                <Form.Control required type="number" value={accNumber} onChange={e => setAccNumber(e.target.value)}
                />
            </Form.Group>

            <Button type='submit' className='my-3' style={{ backgroundColor: 'dodgerblue', width: '100%' }}><Translate size={25} /> Xử lý </Button>

            {loading && <Loader />}
            {res.message && <Message variant='info'>{res.message}</Message>}
        </Form>
    )
}

export default TransferTab
