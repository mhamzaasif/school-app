import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../context/user-context";

function Dashboard() {
    const { user, logoutUser } = useContext(userContext);
    return (
        <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">School ABC</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/deets">More deets</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/memes">
                            Dank memes
                  </Nav.Link>
                        <Nav.Link as={Link} onClick={() => logoutUser()} >Logout </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            Welcome to the dashboard!
            {JSON.stringify(user)}
        </Container>
    );
}

export default Dashboard;
