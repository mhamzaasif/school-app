import React, { useState } from "react";
import { Container, Modal, Button, Form } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./dashboard.css";
import { UserForm } from "../../../@components";

function Dashboard() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Container fluid>
			<h1>Welcome to the dashboard!</h1>
			<Modal
				size="sm"
				show={isModalOpen}
				onHide={() => setIsModalOpen(false)}
				centered
			>
				<ModalHeader>Add New User</ModalHeader>
				<Modal.Body>
					<UserForm />
				</Modal.Body>
			</Modal>
			<div className="add-user-btn" onClick={() => setIsModalOpen(true)}>
				<PlusCircleFill color="#343a40" size={50} />
			</div>
		</Container>
	);
}

export default Dashboard;
