import { Container, Form, Button, FloatingLabel } from "react-bootstrap";

const Guide = () => {
    // const cognitiveDistortions = [{name: 'Катастрофизация', example:''}, 'Черно-белое мышление', 'Эмоциональное рассуждение', 'Усиление негатива', 'Минимизация позитива', 'Поспешные выводы', 'Предсказание будущего', 'Чтение мыслей', 'Обвинение себя', 'Обвинение других'];
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

    return (
        <Container className="d-flex align-items-center justify-content-center my-5">

            <Form className="w-50">

                <Form.Group className="mb-3" controlId="trigger">
                    <Form.Label>Ситуация / триггер</Form.Label>
                    <Form.Control type="Text" placeholder="Изложите факты о ситуации" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="emotion">
                    <Form.Label>Эмоция</Form.Label>
                    <FloatingLabel label="Что вы почувствовали?">
                        <Form.Select aria-label="Emotions select">
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

                <Form.Group className="mb-3" controlId="emotion value">
                    <Form.Label>Сила эмоции</Form.Label>
                    <Form.Range min="1" max="10" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="automatic-thoughts">
                    <Form.Label>Автоматические мысли</Form.Label>

                    <Form.Control
                        as="textarea"
                        placeholder="Напишите мысли, которые возникли у вас в этой ситуации"
                        style={{ height: '100px' }}
                    />

                </Form.Group>

                <Form.Group className="my-4" controlId="cognitive-distortions">

                    <Form.Label className="d-block">Когнитивные искажения</Form.Label>
                    <Form.Text>Выберите те когнитивные искажения, которые вы нашли в своих автоматических мыслях:</Form.Text>
                    <Container className="mt-3">
                        {cognitiveDistortions.map(distortion =>
                            <div key={`key-${distortion.name}`} className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    id={`default-${distortion.name}`}
                                    label={`${distortion.name}`}
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
                        style={{ height: '100px' }}
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="alternative-thoughts">
                    <Form.Label>Альтернативные мысли</Form.Label>

                    <Form.Control
                        as="textarea"
                        placeholder="Напишите, как можно более реалистично и гибко подумать о ситуации"
                        style={{ height: '100px' }}
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