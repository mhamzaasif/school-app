import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { Routes } from "../../../@services";
import "./sidebar.css";

function Sidebar() {
	return (
		<div className="sidebar bg-light px-2">
			<Nav
				className="sidebar-nav"
				variant="pills"
				defaultActiveKey={0}
				navbar={false}
			>
				{Object.keys(Routes.dashboardRoutes).map((route, index) => {
					const { [Routes.dashboardRoutes[route].logo]: Icon } = Icons;
					return (
						<Nav.Item key={index}>
							<Nav.Link
								eventKey={index}
								as={Link}
								to={Routes.dashboardRoutes[route].path}
								className="sidebar-nav-link px-2"
							>
								<Icon /> {Routes.dashboardRoutes[route].name}
							</Nav.Link>
						</Nav.Item>
					);
				})}
			</Nav>
		</div>
	);
}

export default Sidebar;
