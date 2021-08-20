import { Container, Row, Col, Image } from 'react-bootstrap';

// get all properties values and save to corresponding variables using destructuring assignment syntax 
const SingleFeature = ({ title, titleMuted, para, imageLeft, img }) => {
    return (
        <Container>
            <hr className="featurette-divider" />
            <Row className="featurette">
                {/* if imageLeft is true - apply class 'order-lg-2' for text*/}
                <Col lg={7} className={imageLeft && 'order-lg-2'}>
                    <div className="d-flex flex-column align-items-center">
                        <h2 className="featurette-heading">{title}<span className="text-muted">{titleMuted}</span>
                        </h2>
                        <p className="lead">{para}</p>
                    </div>
                </Col>
                {/* if imageLeft is true - apply class 'order-md-1' for image*/}
                <Col lg={5} className={imageLeft && 'order-md-1'}>
                    <Image rounded src={img} alt={title} className=" img-fluid mx-auto " />
                </Col>
            </Row>
        </Container>
    );
}

export default SingleFeature;