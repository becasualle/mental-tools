import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useGlobalContext } from "../context";

const Notes = () => {
    const { notes, deleteCards, deleteSingleCard } = useGlobalContext();
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
                                        <div className="d-grid">
                                            <Button variant="outline-primary" size="sm" className="mt-2" as={Link} to={`/notes/note/${note.noteID}`} >Читать описание</Button>
                                            <Button variant="outline-danger" size="sm" className="mt-2" onClick={() => deleteSingleCard(note.noteID)}>Удалить</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                <Row md={3} className="justify-content-center">
                    {notes.length ? <Button variant="outline-danger" onClick={deleteCards}>Удалить все записи</Button> :
                        <div className="d-flex flex-column justify-content-center">
                            <p className="mt-3">К сожалению, вы еще не сделали ни одной записи :( </p>
                            <Link className="btn btn-outline-primary mt-3 position-relative top-0 end-0" to={`/guide`}>Исправить это недоразумение!</Link>
                        </div>
                    }
                </Row>

            </Container>

        </Container>
    )
}

export default Notes
