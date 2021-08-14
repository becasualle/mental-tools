import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { courses } from '../data';

const CourseModal = ({ courseID }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const currentCourse = courses.find(course => course.courseID === courseID);


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Подробнее
            </Button>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-center" className="px-md-5">{currentCourse.courseTitle}</Modal.Title>
                </Modal.Header>

                <Modal.Body >
                    {currentCourse.courseModalDesc.map((para, index) => <p key={index} className="px-md-5">{para}</p>)}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Понятно
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CourseModal;