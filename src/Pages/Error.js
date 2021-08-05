import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Badge, Button } from 'react-bootstrap'

const Error = () => {
    return (
        <Container>
            <h1>
                Упс! Ошибочка вышла.  <Badge bg="danger">Бля :(</Badge>
            </h1>
            <Link to="/"><Button>Назад домой</Button></Link>
        </Container>
    )
}

export default Error
