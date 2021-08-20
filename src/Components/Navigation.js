import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="md" >
            <Container >
                <Navbar.Brand as={Link} to="/" className="display-6">SoftSkillz</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/">Главная</Nav.Link>
                        <Nav.Link as={Link} to="/course">Курсы</Nav.Link>
                        <Nav.Link as={Link} to="/guide">Анализ мыслей</Nav.Link>
                        <Nav.Link as={Link} to="/notes">Мои записи</Nav.Link>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

    );
}

export default Navigation;