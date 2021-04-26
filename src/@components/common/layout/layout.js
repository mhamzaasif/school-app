import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar";
import "./layout.css";
import { rootContext } from "../../../@context";

function Layout({ component: Component }) {
	const { logoutUser } = useContext(rootContext);
	return (
		<Container fluid>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Navbar.Brand as={Link} to="/">
					School ABC
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link as={Button} onClick={() => logoutUser()}>
							Logout
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="container-layout">
				<div className="d-none d-lg-block">
					<Sidebar />
				</div>
				<div className="content-area h-100">
					<Component />
				</div>
			</div>
		</Container>
	);
}

export default Layout;
