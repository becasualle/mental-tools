import { Container, Accordion, Row, Col, Image } from "react-bootstrap";
import workImg from '../../img/inwork.png';

// render accordion with image
const Topics = () => {
    return (
        <Container fluid="md">
            <Row className="my-5 g-5 justify-content-around align-items-center">

                <Col lg={6}>
                    <Image src={workImg} fluid alt="work in progress"></Image>
                </Col>

                <Col lg={6}>

                    <h2>Платформа в стадии разработки</h2>
                    <div className="text-muted">
                        <p>В минимальной версии продукта вам доступны два модуля - для работы с негативными мыслями и когнитивными искажениями. </p>
                        <p>В будущем на платформе будут появляться новые упражнения и материалы. В приоритете запуск инструментов когнитивно-поведенческой терапии. </p>
                        <p>Изучите список тем, которые в плане разработки: </p>
                    </div>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Цели и ценности</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Устанавливайте цели, которых сможете добиться. В этом вам поможет конструктор SMART целей.</li>
                                    <li>Живите в соответствии со своими ценностями. В этом поможет модуль для анализа ценностей и сильных сторон  </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Начните действовать</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Проанализируйте свои паттерны поведения</li>
                                    <li>Составьте план действий</li>
                                    <li>Развивайте навыки решения проблем</li>
                                    <li>Принимайте осознанные решения с помощью анализа плюсов и минусов различных сценарией</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Развивайте навыки эффективных коммуникаций</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Проанализируйте спор с помощью фреймворка EAR: эмпатия, ассертивность и уважение</li>
                                    <li>Подготовьтесь к сложным диалогам</li>
                                    <li>Практикуйте активное слушание</li>
                                    <li>Научитесь задавать правильные вопросы</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>
            </Row>
        </Container>
    );
}

export default Topics;