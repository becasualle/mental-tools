import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Note from './Note';
import { useGlobalContext } from "../context";

const Notes = () => {
    const { notes } = useGlobalContext();
    return (
        <Container>
            <h1>
                Ваши записи
            </h1>
            <Container fluid>
                <Row xs={1} md={3} xl={4} className="g-4">
                    {notes.map((note) => {
                        return (
                            <Col key={note.noteID}>
                                <Card>
                                    <Card.Header>{note.titleValue}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Описание ситуации</Card.Title>
                                        <Card.Text>{note.triggerValue}</Card.Text>
                                        <Link to={`/note/${note.noteID}`}><Button variant="primary">Подробнее</Button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <Link to="/"><Button>Назад домой</Button></Link>
        </Container>
    )
}

export default Notes
