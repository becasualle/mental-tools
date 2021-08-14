import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context';
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Badge } from "react-bootstrap";

const Note = () => {
    const { notes } = useGlobalContext();
    const [note, setNote] = useState('')
    const { id } = useParams();

    useEffect(() => {
        const newNote = notes.find(note => note.noteID === id);
        setNote(newNote)
    }, [])

    if (note) {
        const { titleValue, triggerValue, emotionValue, emotionPowerValue, automaticThoughtsValue, cognitiveDistortionsValue, challengeThoughtsValue, alternativeThoughtsValue } = note;

        return (
            <Container className="my-5 px-4 px-sm-5 ">
                <Row>
                    <Col xl={7}>
                        <h1>{titleValue}</h1>
                        <div className="my-3">
                            <Badge bg="info">{emotionValue}</Badge>
                            <Badge bg="info" className="mx-3">{emotionPowerValue}/10</Badge>
                        </div>
                        <div className="my-3">
                            {cognitiveDistortionsValue.map((distortion, index) =>
                                <Badge bg="light" text="dark" key={index}>{distortion}</Badge>
                            )}
                        </div>
                        <div className="my-3">
                            <h5>Описание ситуации</h5>
                            <p>{triggerValue}</p>
                        </div>
                        <div className="my-3">
                            <h5>Автоматические мысли</h5>
                            <p>{automaticThoughtsValue}</p>
                        </div>
                        <div className="my-3">
                            <h5>Челлендж автоматических мыслей</h5>
                            <p>{challengeThoughtsValue}</p>
                        </div>
                        <div className="my-3">
                            <h5>Альтернативные мысли</h5>
                            <p>{alternativeThoughtsValue}</p>
                        </div>
                    </Col>
                </Row>

            </Container >
        )
    }

    return (
        <Container>
            <h1 className="text-center">Пока вы не сделали ни одной заметки</h1>
        </Container >
    )

}

export default Note;