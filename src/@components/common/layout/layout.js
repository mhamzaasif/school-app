import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar";
import "./layout.css";
import { rootContext } from "../../../@context";

function Layout({ component: Component }) {
	const { logoutUser } = useContext(rootContext);
	const [toggleSidebar, setToggleSidebar] = useState(false);
	return (
		<Container fluid>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => setToggleSidebar((prevState) => !prevState)}
				/>
				<div
					className={`d-block d-lg-none responsive-sidebar bg-light ${
						toggleSidebar ? "sidebar-open" : ""
					}`}
				>
					<Sidebar />
				</div>
				<Navbar.Brand as={Link} to="/" className="px-1">
					School ABC
				</Navbar.Brand>
				<Nav className="ml-auto" navbar={false}>
					<Nav.Link
						as={Button}
						onClick={() => logoutUser()}
						className="logout-button"
					>
						Logout
					</Nav.Link>
				</Nav>
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
