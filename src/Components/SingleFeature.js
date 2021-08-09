import { Container, Row, Col, Image } from 'react-bootstrap';

const SingleFeature = ({ title, titleMuted, para, imageLeft, img }) => {
    return (
        <Container>
            <hr className="featurette-divider" />
            <Row className="featurette">
                <Col lg={7} className={imageLeft && 'order-lg-2'}>
                    <div className="d-flex flex-column align-items-center">
                        <h2 className="featurette-heading">{title}<span className="text-muted">{titleMuted}</span>
                        </h2>
                        <p className="lead">{para}</p>
                    </div>

                </Col>
                <Col lg={5} className={imageLeft && 'order-md-1'}>
                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                        height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                    </svg> */}
                    <Image rounded src={img} alt={title} className=" img-fluid mx-auto " />
                </Col>
            </Row>
            {/* <hr className="featurette-divider" /> */}
        </Container>

    );
}

export default SingleFeature;