import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Note from './Note';
import { useGlobalContext } from "../context";

const Notes = () => {
    const { notes } = useGlobalContext();
    return (
        <Container>
            <h1 className="mt-5 text-center">
                Мои записи
            </h1>
            <Container fluid className="my-4">
                <Row xs={1} md={3} xl={4} className="g-4">
                    {notes.map((note) => {
                        return (
                            <Col key={note.noteID}>
                                <Card>
                                    <Card.Header>{note.titleValue}</Card.Header>
                                    <Card.Body>

                                        <Card.Text>{note.triggerValue}</Card.Text>
                                        <div class="d-grid">
                                            <Button variant="outline-primary" size="sm" as={Link} to={`/note/${note.noteID}`} >Читать описание</Button>
                                        </div>


                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </Container>
    )
}

export default Notes
