import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Alert, Row, Col, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import Loader from '../../components/Loader'
import { verify_DT_Service, logout } from '../../actions/userActions'
import FormContainer from '../../components/FormContainer'

const PayDebtConfirmScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const curURL = useLocation().search;

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const token = new URLSearchParams(curURL).get('token');
    const uId = new URLSearchParams(curURL).get('uid');

    const user_DT_services = useSelector(state => state.user_DT_services)
    const { loading, res, errorRes } = user_DT_services

    const [amount, setAmount] = useState(0)
    const [currency, setCurrency] = useState('')

    useEffect(() => {
        if (!userInfo || !uId || !token) {
            navigate('/login')
        }
        else {
            if (Object.keys(res).length === 0) {
                dispatch(verify_DT_Service(token, 'debt-payment', 'verify'))
            }
            else if (errorRes && res.message === 'Unauthorized token') {
                dispatch(logout('logout'))
            }
            else if (!errorRes) {
                setAmount(res.amount)
                setCurrency(res.currency)
            }
        }
        // eslint-disable-next-line
    }, [dispatch, navigate, token, res, userInfo])



    //123QWe!@# minhpatmail@gmail.com

    const submitHandler = (e) => {
        e.preventDefault() //dispatch
        dispatch(verify_DT_Service(token, 'debt-payment', 'submit'))

    }

    return (
        <FormContainer style={{ marginTop: 110 }}>
            {(res.message && !errorRes) && (<Alert className='justify-content-center' variant='success'>{res.message}&#160;&#160;&#160;
                <Alert.Link href="/">Trở về trang chủ </Alert.Link></Alert>)}
            {errorRes && < Alert className='justify-content-center' variant='danger'>{res.message}&#160;&#160;&#160;
                <Alert.Link href="/">Trở về trang chủ </Alert.Link></Alert>}
            {loading && <Loader />}
            <h1>Xác nhận Thanh toán nợ tín dụng</h1>
            <Form onSubmit={submitHandler}>
                <Row>
                    <Form.Group as={Col} controlId='amount'>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control disabled type='number' placeholder='amount' required
                            value={amount} onChange={e => setAmount(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId='currency'>
                        <Form.Label>Currency</Form.Label>
                        <Form.Control disabled type='text' placeholder='currency' required
                            value={currency} onChange={e => setCurrency(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Button type='submit' className='mt-3' >Xác nhận thanh toán nợ</Button>
            </Form>
        </FormContainer >
    )
}

export default PayDebtConfirmScreen
