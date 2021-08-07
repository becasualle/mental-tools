import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Hero from '../Components/Hero'
import CustomCards from "../Components/CustomCards";
import Featurette from "../Components/Featurette";
import Topics from "../Components/Topics"

const Home = () => {
    return (
        <Container fluid className="px-0">
            <Hero />
            <CustomCards />
            <Featurette />
            <Topics />
        </Container>

    );
}

export default Home;