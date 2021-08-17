import { useParams } from "react-router";
import { courses } from "../data";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseModal from "../Components/CourseModal";

const SingleCourse = () => {
    // get course id using url params
    const { id } = useParams();
    // find course by id and get it's properties
    const { courseID, courseTitle, courseDescription, courseArticles } = courses.find(course => course.courseID === id);

    return (
        <>
            {/* modal section */}
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
            {/* cards section */}
            <Container className="my-5">
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {/* render card for each article */}
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
                                                {/* depending on course id link to diffetent paths */}
                                                {courseID === 'tackling-negative-thoughts' ?
                                                    // use reactrouter link to object in order to provide link and properties with course id
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