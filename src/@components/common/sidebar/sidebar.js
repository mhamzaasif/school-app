import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { Routes } from "../../../@services";
import "./sidebar.css";

function Sidebar() {
	return (
		<div className="sidebar">
			<Nav className="sidebar-nav">
				{Object.keys(Routes.dashboardRoutes).map((route, index) => {
					const { [Routes.dashboardRoutes[route].logo]: Icon } = Icons;
					return (
						<Nav.Link
							key={index}
							as={Link}
							to={Routes.dashboardRoutes[route].path}
							className="sidebar-nav-link"
						>
							<Icon /> {Routes.dashboardRoutes[route].name}
						</Nav.Link>
					);
				})}
			</Nav>
		</div>
	);
}

export default Sidebar;
