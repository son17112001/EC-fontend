import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const FormContainer = ({children}) => {
    return (
       <Container style={{ marginTop: 100,marginBottom: 200 }}>
           <Row className='justify-content-center'>
                <Col xs={12} md={8} lg={5}>
                    {children}
                </Col>
           </Row>
       </Container>
    )
}

export default FormContainer
