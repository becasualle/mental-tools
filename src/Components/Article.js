import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Article = () => {
    return (
        <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
            <Row className="justify-content-center">
                <Col sm={8} md={6}>
                    <Card>
                        <Card.Header>Overview</Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1627844494544-dd74b500a4de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                        <Card.Body>
                            {/* <Card.Title></Card.Title> */}
                            <Card.Text>How you think affects how you feel. Your mood and emotions are shaped your thoughts. </Card.Text>
                            <Card.Text>Therefore, by changing your thoughts, you can change the way you feel.</Card.Text>
                            <Card.Text>Analyzing your thoughts is a powerful Cognitive Behavioral Therapy technique that can help you achieve that.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Article;