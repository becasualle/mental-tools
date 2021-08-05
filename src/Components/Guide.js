import React, { useState, useEffect } from "react";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";
import Note from "../Pages/Note";
import Notes from "../Pages/Notes";

const Guide = () => {
    const { notes, setNotes } = useGlobalContext();
    const titleField = React.useRef('');
    const triggerField = React.useRef('');
    const emotionField = React.useRef('');
    const emotionPowerField = React.useRef('');
    const automaticThoughtsField = React.useRef('');
    const challengeThoughtsField = React.useRef('');
    const alternativeThoughtsField = React.useRef('');

    let history = useHistory();


    const cognitiveDistortions = [
        { name: 'Катастрофизация', example: 'Что если случится худшее?' },
        { name: 'Черно-белое мышление', example: 'Я полный неудачник' },
        { name: 'Эмоциональное рассуждение', example: 'Я так чувствую, стало быть это правда' },
        { name: 'Усиление негатива', example: 'Я абсолютно все загубил ' },
        { name: 'Минимизация позитива', example: 'Они так сказали просто из вежливости' },
        { name: 'Поспешные выводы', example: 'Она со мной не поздаровалась, следовательно, она меня ненавидит' },
        { name: 'Предсказание будущего', example: 'Я наверняка провалю мой экзамен' },
        { name: 'Чтение мыслей', example: 'Он не хотел со мной говорить' },
        { name: 'Обвинение себя', example: 'Это все я виноват' },
        { name: 'Обвинение других', example: 'Это они во всем виноваты' }
    ];

    // store active checkboxes values (instead of useRef)
    const [checkedDistortions, setCheckedDistortions] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();


        const [titleValue, triggerValue, emotionValue, emotionPowerValue, automaticThoughtsValue, cognitiveDistortionsValue, challengeThoughtsValue, alternativeThoughtsValue] = [titleField.current.value, triggerField.current.value, emotionField.current.value, emotionPowerField.current.value, automaticThoughtsField.current.value, checkedDistortions, challengeThoughtsField.current.value, alternativeThoughtsField.current.value]
        const noteID = new Date().getTime().toString();
        const newNote = { noteID, titleValue, triggerValue, emotionValue, emotionPowerValue, automaticThoughtsValue, cognitiveDistortionsValue, challengeThoughtsValue, alternativeThoughtsValue }
        setNotes([...notes, newNote]);

        history.push(`/note/${noteID}`)

    }

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center my-5">

            <Form className="w-50" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="trigger">
                    <Form.Label>Ситуация/Триггер</Form.Label>
                    <Form.Control type="Text" placeholder="Что случилось?" ref={titleField} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="trigger">
                    <Form.Label>Описание ситуации</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Изложите факты о ситуации"
                        style={{ height: '70px' }}
                        ref={triggerField}
                    />
                    {/* <Form.Control type="Text" placeholder="Изложите факты о ситуации" ref={triggerField} /> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="emotion">
                    <Form.Label>Эмоция</Form.Label>
                    <FloatingLabel label="Что вы почувствовали?">
                        <Form.Select aria-label="Emotions select" ref={emotionField}>
                            <option>Выберите самую яркую эмоцию</option>
                            <option value="Anger">Гнев, возмущение</option>
                            <option value="Anxiety">Страх, тревога</option>
                            <option value="Depression">Грусть, разочарование</option>
                            <option value="Guilt">Вина, сожаление</option>
                            <option value="Shame">Стыд, смущение</option>
                            <option value="Happiness">Радость, возбуждение</option>
                            <option value="Love">Любовь, благодарность</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="emotion-power">
                    <Form.Label>Сила эмоции</Form.Label>
                    <Form.Range min="1" max="10" ref={emotionPowerField} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="automatic-thoughts">
                    <Form.Label>Автоматические мысли</Form.Label>

                    <Form.Control
                        as="textarea"
                        placeholder="Напишите мысли, которые возникли у вас в этой ситуации"
                        style={{ height: '70px' }}
                        ref={automaticThoughtsField}
                    />

                </Form.Group>

                <Form.Group className="my-4" controlId="cognitive-distortions">

                    <Form.Label className="d-block">Когнитивные искажения</Form.Label>
                    <Form.Text>Выберите те когнитивные искажения, которые вы нашли в своих автоматических мыслях:</Form.Text>
                    <Container className="mt-3">
                        {/* <Form.Check type="checkbox" id={`${cognitiveDistortions[0].name}`} label={`${cognitiveDistortions[0].name}`} ref={cognitiveDistortionsField} />
                        <Form.Text>{cognitiveDistortions[0].example}</Form.Text> */}
                        {cognitiveDistortions.map((distortion, index) =>
                            <div key={`key-${distortion.name}`} className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    id={`${distortion.name}`}
                                    label={`${distortion.name}`}
                                    // check what will be if i click and then click again and fix if bug
                                    onClick={() => {
                                        setCheckedDistortions([...checkedDistortions, distortion.name]);
                                    }}
                                />
                                <Form.Text>{distortion.example}</Form.Text>


                            </div>
                        )}
                    </Container>

                </Form.Group>

                <Form.Group className="mb-3" controlId="challenge-thoughts">
                    <Form.Label>Челлендж автоматических мыслей</Form.Label>

                    <Form.Control
                        as="textarea"
                        placeholder="Перечислите факты, опровергающие эти мысли"
                        style={{ height: '70px' }}
                        ref={challengeThoughtsField}
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="alternative-thoughts">
                    <Form.Label>Альтернативные мысли</Form.Label>

                    <Form.Control
                        as="textarea"
                        placeholder="Напишите, как можно более реалистично и гибко подумать о ситуации"
                        style={{ height: '70px' }}
                        ref={alternativeThoughtsField}
                    />

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>



            </Form>

        </Container>
    );
}

export default Guide;