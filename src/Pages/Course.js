import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
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
            imgLink: 'https://images.unsplash.com/photo-1472566316349-bce77aa2a778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'All-or-Nothing Thinking / Polarized Thinking / Black-and-White Thinking',
            description: 'Когда человек в своей оценке впадает в крайности и оценивает объект либо как совершенно восхитительный, либо как совершенно ужасный и исключает из восприятия множество оттенков серого. ',
            examples: ['«Я всегда проваливаюсь, когда пробую делать что-то новое»', 'Женщина съедает ложку мороженого. Она считает себя полной неудачницей из-за нарушения диеты. В конце концов съедает целое ведро мороженого']
        },
        {
            id: 2,
            title: 'Черно-белое мышлениеdas',
            imgLink: 'https://images.unsplash.com/photo-1472566316349-bce77aa2a778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'All-or-Nothing Thinking / Polarized Thinking / Black-and-White Thinking',
            description: 'Когда человек в своей оценке впадает в крайности и оценивает объект либо как совершенно восхитительный, либо как совершенно ужасный и исключает из восприятия множество оттенков серого. ',
            examples: ['«Я всегда проваливаюсь, когда пробую делать что-то новое»', 'Женщина съедает ложку мороженого. Она считает себя полной неудачницей из-за нарушения диеты. В конце концов съедает целое ведро мороженого']
        },
        {
            id: 3,
            title: 'Черно-белое мышлениgfsdе',
            imgLink: 'https://images.unsplash.com/photo-1472566316349-bce77aa2a778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            engName: 'All-or-Nothing Thinking / Polarized Thinking / Black-and-White Thinking',
            description: 'Когда человек в своей оценке впадает в крайности и оценивает объект либо как совершенно восхитительный, либо как совершенно ужасный и исключает из восприятия множество оттенков серого. ',
            examples: ['«Я всегда проваливаюсь, когда пробую делать что-то новое»', 'Женщина съедает ложку мороженого. Она считает себя полной неудачницей из-за нарушения диеты. В конце концов съедает целое ведро мороженого']
        }]
    }

    useEffect(() => setArticles([cognitiveDistortionCourse]), [])
    console.log(articles)

    return (
        <>
            {articles.map((course, index) => {
                const courseArticles = course.courseArticles;

                return (
                    <>
                        <section className="bg-light" key={index}>
                            <Container className="text-center">
                                <Row>
                                    <Col md={10} lg={8} className="mx-auto">
                                        <h1 className="fw-light">{course.courseTitle}</h1>
                                        <p className="lead text-muted">{course.courseDescription}</p>
                                        <p>
                                            <Button className="btn btn-primary my-2">Открыть первый урок</Button>
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
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-sm btn-outline-secondary">Читать</button>
                                                            {/* <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                        </div>
                                                        <small className="text-muted">9 мин</small>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            {/* <div className="card shadow-sm">
                                                
                                                <p>{article.title}</p>

                                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                    <title>Placeholder</title>
                                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                                        dy=".3em"></text>
                                                </svg>

                                                <div className="card-body">
                                                    <p className="card-text">{article.engName}</p>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-sm btn-outline-secondary">Читать</button>
                                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                        </div>
                                                        <small className="text-muted">9 мин</small>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    </>
                )

            })}


            {/* <Container>
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
            </Container> */}

        </>


    );
}

export default Course;