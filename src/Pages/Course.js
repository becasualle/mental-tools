import { Container, Row, Col, Button } from "react-bootstrap";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const Course = () => {
    const { articles, setArticles } = useGlobalContext();
    const cognitiveDistortionCourse = {
        courseTitle: 'Когнитивные искажения',
        courseDescription: 'Когнитивное искажение — это систематические ошибки в мышлении. Под воздействием когнитивных искажений формируется «субъективная социальная реальность», которая влияет на поведение человека. Умение определять когнитивные искажения и очищать от них свои мысли помогает значительно снизить количество и силу негативных эмоций. ',
        courseArticles: [{
            id: 1,
            title: 'Черно-белое мышление',
            engName: 'All-or-Nothing Thinking / Polarized Thinking / Black-and-White Thinking',
            description: 'Когда человек в своей оценке впадает в крайности и оценивает объект либо как совершенно восхитительный, либо как совершенно ужасный и исключает из восприятия множество оттенков серого. ',
            examples: ['«Я всегда проваливаюсь, когда пробую делать что-то новое»', 'Женщина съедает ложку мороженого. Она считает себя полной неудачницей из-за нарушения диеты. В конце концов съедает целое ведро мороженого']
        }]
    }



    // useEffect(() => setArticles([...articles, cognitiveDistortionCourse]), [cognitiveDistortionCourse])



    console.log(articles)

    return (
        <section className="bg-light">
            <Container className="text-center">
                <Row className="py-lg-5">
                    <Col md={8} lg={6} className="mx-auto">
                        <h1 className="fw-light">Album example</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                            <Button className="btn btn-primary my-2">Main call to action</Button>
                            {/* <Button className="btn btn-secondary my-2">Secondary action</Button> */}
                            {/* <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a> */}
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Col>
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                    dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                    dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                    dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </Col>




                </Row>
            </Container>
        </section>

    );
}

export default Course;