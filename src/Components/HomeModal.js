import { Container, Row, Col } from 'react-bootstrap';
import ModalComp from '../Components/ModalComp'

// render modal section (modal content in ModalComp)
const HomeModal = () => {
    return (
        <section className="bg-light">
            <Container >
                <div className="text-center">
                    <h2>Оставайтесь на связи</h2>
                    <p className="lead">Узнавайте о свежих обновлениях самыми первыми </p>
                </div>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <ModalComp />
                    </Col>
                </Row>

            </Container>
        </section>
    );
}

export default HomeModal;