import { Container, Row, Col } from 'react-bootstrap';
import ModalComp from '../Components/ModalComp'


const HomeModal = () => {
    return (
        <section className="bg-light">
            <Container >
                <div class="text-center">
                    <h2>Оставайтесь на связи</h2>
                    <p class="lead">Узнавайте о свежих обновлениях самыми первыми </p>
                </div>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        {/* <p class="text-muted my-4">
                            Подпишитесь, чтобы первыми узнавать о новых модулях. Мы не будем спамить: только новости об обновлениях без рекламы.
                        </p> */}
                        <ModalComp />
                    </Col>
                </Row>

            </Container>
        </section>


    );
}

export default HomeModal;