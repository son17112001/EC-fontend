<<<<<<< HEAD
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ProfileForm = ({ children }) => {
    return (
        <Container style={{ marginTop: 110 }}>
            <Row className='justify-content-center' >
                <Col xs={10} md={9} lg={10}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileForm
=======
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ProfileForm = ({ children }) => {
    return (
        <Container style={{ marginTop: 110 }}>
            <Row className='justify-content-center' >
                <Col className='d-lg-flex' xs={10} md={9} lg={10}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileForm
>>>>>>> b76989e8a2635348be730aef7712ae5e9e89ad56
