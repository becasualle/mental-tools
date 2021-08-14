import { courses } from "../data";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation, useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";


const ArticleStandard = () => {

    const { id } = useParams();
    const location = useLocation();
    const { courseID } = location.state;

    // find course which we selected by courseID
    const articles = courses.find(course => course.courseID === courseID).courseArticles;
    // find article object by article id 
    const article = articles.find(article => article.id === id);

    if (article) {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={10} xl={8}>
                        <section id="article">
                            <h2 className="display-4">{article.title}</h2>
                            <Image src={article.imgLink} fluid className="my-3" />

                            {article.description.map((para, index) =>
                                <p className="fs-5 mt-3" key={index}>
                                    {para}
                                </p>
                            )}

                            {article.content.map((piece, index) => {
                                return (
                                    <div key={index}>
                                        <h3 className="h-4 pt-3" >{piece.subtitle}</h3>
                                        {
                                            piece.paragraphs.map((para, index) =>
                                                <p className="fs-5 mt-3" key={index}>
                                                    {para}
                                                </p>)
                                        }
                                    </div>

                                )
                            })}

                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-outline-secondary mt-3 position-relative top-0 end-0" to={`/course/tackling-negative-thoughts`}>Назад к списку статей</Link>
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


export default ArticleStandard;