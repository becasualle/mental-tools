import { Container, Row, Col } from 'react-bootstrap';
import ModalComp from '../Components/ModalComp'


const HomeModal = () => {
    return (
        <section className="bg-light">
            <Container >
                <div class="text-center">
                    <h2>Stay in The Loop</h2>
                    <p class="lead">Get the latest updates as they happen...</p>
                </div>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <p class="text-muted my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                            exercitationem voluptatibus porro, hic asperiores fuga illo voluptates obcaecati deleniti
                            veritatis sunt saepe quasi deserunt ex ipsum. Est possimus, aspernatur, vitae eligendi rem odit
                            quaerat, ipsum pariatur ratione maxime delectus fuga minus accusamus dolores iusto maiores
                            accusantium cumque magnam placeat quia!</p>
                        <ModalComp />
                    </Col>
                </Row>

            </Container>
        </section>


    );
}

export default HomeModal;