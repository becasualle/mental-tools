import { useParams } from "react-router";
import { courses } from "../data";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseModal from "../Components/CourseModal";

const SingleCourse = () => {
    const { id } = useParams();
    const { courseID, courseTitle, courseDescription, courseArticles } = courses.find(course => course.courseID === id);

    return (

        <>
            <section className="bg-light">
                <Container className="text-center">
                    <Row>
                        <Col md={10} lg={8} className="mx-auto">
                            <h1 className="fw-light">{courseTitle}</h1>
                            <p className="lead text-muted">{courseDescription}</p>
                            <p>
                                <CourseModal courseID={courseID} />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container className="my-5">
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {courseArticles.map((article, index) => {

                        return (
                            <Col key={index}>
                                <Card className="card shadow-sm">
                                    <Card.Img variant="top" src={article.imgLink} />
                                    <Card.Body>
                                        <Card.Title>
                                            {article.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {article.engName}
                                        </Card.Text>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="btn-group w-100 pt-3">

                                                {courseID === 'tackling-negative-thoughts' ?
                                                    <Link className="btn btn-sm btn-outline-primary" to={{
                                                        pathname: `/course/tackling-negative-thoughts/${article.id}`,
                                                        state: {
                                                            courseID
                                                        }
                                                    }}>Читать</Link> :
                                                    <Link className="btn btn-sm btn-outline-primary" to={{
                                                        pathname: `/course/cognitive-distortions/${article.id}`,
                                                        state: {
                                                            courseID
                                                        }
                                                    }}>Читать</Link>
                                                }

                                            </div>
                                            {/* <small className="text-muted">9 мин</small> */}
                                        </div>
                                    </Card.Body>
                                </Card>

                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>


    );

}

export default SingleCourse;