import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useParams, useLocation } from "react-router-dom";
import { courses } from "../data";

const Article = () => {
    const { id } = useParams();
    const location = useLocation();
    const { courseID } = location.state;

    // find course which we selected by courseID
    const articles = courses.find(course => course.courseID === courseID).courseArticles;
    // find article object by article id 
    const article = articles.find(article => article.id === id);
    console.log(articles);
    console.log(article);

    if (article) {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={10} xl={8}>
                        <section id="article">
                            <h2 className="display-4">{article.title}</h2>
                            <p className="lead">
                                {article.engName}
                            </p>
                            <Image src={article.imgLink} fluid className="my-3" />
                            <p className="fs-5 mt-3">{article.description}</p>
                            <p className="fs-5 fw-bold">Примеры:</p>

                            <ul>
                                {article.examples.map((example, index) => <li key={index} className="fs-5">{example};</li>)}
                            </ul>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-outline-secondary mt-3 position-relative top-0 end-0" to={`/course/cognitive-distortions`}>Назад к списку статей</Link>
                            </div>

                        </section>
                    </Col>
                </Row>
            </Container>
        );
    }


    return (
        <Container>
            <h1 className="text-center my-5">К сожалению, статья временно недоступна</h1>
        </Container >
    )
}

export default Article;