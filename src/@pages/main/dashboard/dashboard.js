import React, { useState } from "react";
import { Container, Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import { addUserValidationSchema } from "../../../@services";
import { PlusCircleFill } from "react-bootstrap-icons";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./dashboard.css";

function Dashboard() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const addUser = async (props) => {
		console.log(props);
		setIsModalOpen(false);
	};
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
					<Formik
						initialValues={{
							name: "",
							email: "",
							password: "",
							phoneNumber: "",
							role: "",
						}}
						onSubmit={addUser}
						validationSchema={addUserValidationSchema}
					>
						{({ values, handleChange, handleSubmit, errors, touched }) => (
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId="name">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										value={values.name}
										onChange={handleChange}
										isInvalid={touched.name && errors.name}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.name}
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="email">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										value={values.email}
										onChange={handleChange}
										isInvalid={touched.email && errors.email}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.email}
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										value={values.password}
										onChange={handleChange}
										isInvalid={touched.password && errors.password}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.password}
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="phoneNumber">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										type="text"
										value={values.phoneNumber}
										onChange={handleChange}
										isInvalid={touched.phoneNumber && errors.phoneNumber}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.phoneNumber}
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="role">
									<Form.Label>Role</Form.Label>
									<Form.Control
										as="select"
										value={values.role}
										onChange={handleChange}
										isInvalid={touched.role && errors.role}
									>
										<option></option>
										<option>Admin</option>
										<option>Teacher</option>
										<option>Student</option>
									</Form.Control>
									<Form.Control.Feedback type="invalid">
										{errors.role}
									</Form.Control.Feedback>
								</Form.Group>
								<Modal.Footer>
									<Button
										variant="danger"
										onClick={() => setIsModalOpen(false)}
									>
										Close
									</Button>
									<Button variant="success" type="submit">
										Save
									</Button>
								</Modal.Footer>
							</Form>
						)}
					</Formik>
				</Modal.Body>
			</Modal>
			<div className="add-user-btn" onClick={() => setIsModalOpen(true)}>
				<PlusCircleFill color="#343a40" size={50} />
			</div>
		</Container>
	);
}

export default Dashboard;
