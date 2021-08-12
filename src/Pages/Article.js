import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { courses } from "../data";

const Article = () => {
    const { id } = useParams();
    // const [article, setArticle] = useState([]);
    // console.log(courses)
    const articles = courses[0].courseArticles;
    const article = articles.find(article => article.id === id);

    // useEffect(() => {
    //     const currArticle = articles.find(article => article.id === id);
    //     setArticle(currArticle);
    // })

    console.log(article);

    if (article) {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={10} xl={8}>
                        <section id="article">
                            <h2 class="display-4">{article.title}</h2>
                            <p class="lead">
                                {article.engName}
                            </p>
                            <Image src={article.imgLink} fluid />
                            <p className="fs-5 mt-3">{article.description}</p>
                            <p className="fs-5 fw-bold">Примеры:</p>

                            <ul>
                                {article.examples.map((example, index) => <li key={index} className="fs-5">{example};</li>)}
                            </ul>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-outline-secondary mt-3 position-relative top-0 end-0" to={`/mental-tools/course`}>Назад к списку статей</Link>
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