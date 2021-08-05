import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="md" >
            <Container >
                <Navbar.Brand as={Link} to="/" className="display-6">Дневник мыслей</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/">Главная</Nav.Link>

                        <Nav.Link as={Link} to="/guide">Анализ мыслей</Nav.Link>
                        <Nav.Link as={Link} to="/notes">Мои записи</Nav.Link>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>


        //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //       <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="me-auto">
        //           <Nav.Link href="#home">Home</Nav.Link>
        //           <Nav.Link href="#link">Link</Nav.Link>
        //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //             <NavDropdown.Divider />
        //             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //           </NavDropdown>
        //         </Nav>
        //       </Navbar.Collapse>
        //     </Container>
        //   </Navbar>
        // <Nav className="justify-content-center" activeKey="/home">
        //     <Nav.Item>
        //         <Nav.Link href="/home">Active</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="link-1">Link</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="link-2">Link</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="disabled" disabled>
        //             Disabled
        //         </Nav.Link>
        //     </Nav.Item>
        // </Nav>
    );
}

export default Navigation;