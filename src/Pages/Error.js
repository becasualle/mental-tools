import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Badge, Button } from 'react-bootstrap'

const Error = () => {
    return (
        <Container>
            <section>
                <h1>
                    К сожалению, такой страницы не существует <Badge bg="danger">Ошибка</Badge>
                </h1>
                <Link to="/"><Button>Назад домой</Button></Link>
            </section>

        </Container>
    )
}

export default Error
