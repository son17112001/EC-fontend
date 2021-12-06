import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'

import FormContainer from '../components/FormContainer'


const ForgotScreen = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const [email, setEmail] = useState('')
   

    const location = useLocation()
    const navigate = useNavigate()
  
    useEffect(() => {
      
    },[])

    const submitHandler = (e) => {
        e.preventDefault() //dispatch login
        
    }

    return (
        <FormContainer>
            <h1 style={{ color: 'lightyellow', textAlign: 'center', marginBottom: 30 }}>Quên mật khẩu</h1>
            {error && <Message variant='danger'>{error}</Message>}
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
                        <Button type='submit' >Gửi</Button>
                    </Col>
                    
                </Row>

            </Form>
        </FormContainer>
    )
}

export default ForgotScreen;
