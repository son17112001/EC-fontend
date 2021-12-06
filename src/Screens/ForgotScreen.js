import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { forgotPassword} from '../actions/userActions'
import FormContainer from '../components/FormContainer'


const ForgotScreen = () => {

    const dispatch = useDispatch()
    const userForgotPassWord = useSelector(state => state.userForgotPassWord)
    const { loading, resMessage } = userForgotPassWord
    const [email, setEmail] = useState('')
   

    const location = useLocation()
    const navigate = useNavigate()
  
    useEffect(() => {
      
    },[])

    const submitHandler = (e) => {
        e.preventDefault() //dispatch login
        dispatch(forgotPassword(email))
    }

    return (
        <FormContainer>
            <h1 style={{ color: 'lightyellow', textAlign: 'center', marginBottom: 30 }}>Quên mật khẩu</h1>
            {resMessage && <Message variant='danger'>{resMessage}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='accNumber'>
                    <Form.Label>Nhập email đã đăng kí</Form.Label>
                    <Form.Control type='accNumber' placeholder='Enter Account Number'
                    value={email} onChange={e => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                
                <Row className="py-4">
               
                    <Col>
                        <Button type='submit' variant='success' style={{width:"100%"}}>Gửi</Button>
                    </Col>
                    
                </Row>

            </Form>
        </FormContainer>
    )
}

export default ForgotScreen;
