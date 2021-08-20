import { Container } from "react-bootstrap";
import Hero from '../Components/HomePage/Hero'
import CustomCards from "../Components/HomePage/CustomCards";
import Featurette from "../Components/HomePage/Featurette";
import Topics from "../Components/HomePage/Topics";
import HomeModal from "../Components/HomePage/HomeModal"

// Home page contains different content-based components
const Home = () => {
    return (
        <Container fluid className="px-0">
            <Hero />
            <CustomCards />
            <Featurette />
            <Topics />
            <HomeModal />
        </Container>
    );
}

export default Home;