import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar";
import "./layout.css";
import { rootContext } from '../../../@context';

function Layout({ component: Component }) {
    const { logoutUser } = useContext(rootContext);
    return (
        <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">School ABC </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/deets">More deets</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/memes">
                            Dank memes
                  </Nav.Link>
                        <Nav.Link as={Button} onClick={() => logoutUser()} >Logout </Nav.Link>
                    </Nav>
                    <div className="d-md-block d-lg-none">
                        <Sidebar />
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <div className="container-layout">
                <div className="layout-sidebar d-none d-lg-block">
                    <Sidebar />
                </div>
                <Component />
            </div>
        </Container>
    );
}

export default Layout;
