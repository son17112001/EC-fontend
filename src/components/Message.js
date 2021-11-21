import React from 'react'
<<<<<<< HEAD
import {Alert} from 'react-bootstrap'
export default function Message(props) {
    return (
        <Alert variant={props.variant}>
            {props.children}
        </Alert>
    )
}
=======
import { Alert } from 'react-bootstrap'

const Message = ({variant,children}) => {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}
Message.defaultProps = {
    variant:'info'
}
export default Message
>>>>>>> Login/Regis
