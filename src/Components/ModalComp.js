import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

const ModalComp = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* when click show modal */}
            <Button variant="primary" onClick={handleShow}>
                Оставить почту
            </Button>
            {/* hide modal by buttons or close button */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Узнавайте об обновлениях</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Подпишитесь, чтобы первыми узнавать о новых модулях. Мы не будем спамить: только новости об обновлениях без рекламы.
                    </p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Напишите ваш email:</Form.Label>
                            <Form.Control type="email" placeholder="Например, mark@mail.ru" />
                            <Form.Text className="text-muted">
                                Мы никогда не делимся вашими контактами с третьими лицами.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Отправить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComp;