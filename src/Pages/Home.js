import { Container } from "react-bootstrap";
import Hero from '../Components/Hero'
import CustomCards from "../Components/CustomCards";
import Featurette from "../Components/Featurette";
import Topics from "../Components/Topics";
import HomeModal from "../Components/HomeModal"

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