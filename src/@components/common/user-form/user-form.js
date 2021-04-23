import React from "react";
import { Formik } from "formik";
import { Form, Button, Row, Col } from "react-bootstrap";
import { addUserValidationSchema, apis } from "../../../@services";

const initialValues = {
	name: "",
	email: "",
	password: "",
	phoneNumber: "",
	role: "",
};

const UserForm = () => {
	const addUser = async ({ name, email, password, role }) => {
		await apis.addNewUser({ name, email, password, role });
	};

	return (
		<>
			<h3>Add New User</h3>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					addUser(values);
					actions.resetForm(initialValues);
				}}
				validationSchema={addUserValidationSchema}
			>
				{({ values, handleChange, handleSubmit, errors, touched }) => (
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="name">
							<Row>
								<Col sm="2">
									<Form.Label>Name</Form.Label>
								</Col>
								<Col>
									<Form.Control
										type="text"
										value={values.name}
										onChange={handleChange}
										isInvalid={touched.name && errors.name}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.name}
									</Form.Control.Feedback>
								</Col>
							</Row>
						</Form.Group>
						<Form.Group controlId="email">
							<Row>
								<Col sm="2">
									<Form.Label>Email</Form.Label>
								</Col>
								<Col>
									<Form.Control
										type="email"
										value={values.email}
										onChange={handleChange}
										isInvalid={touched.email && errors.email}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.email}
									</Form.Control.Feedback>
								</Col>
							</Row>
						</Form.Group>
						<Form.Group controlId="password">
							<Row>
								<Col sm="2">
									<Form.Label>Password</Form.Label>
								</Col>
								<Col>
									<Form.Control
										type="password"
										value={values.password}
										onChange={handleChange}
										isInvalid={touched.password && errors.password}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.password}
									</Form.Control.Feedback>
								</Col>
							</Row>
						</Form.Group>
						<Form.Group controlId="phoneNumber">
							<Row>
								<Col sm="2">
									<Form.Label>Phone Number</Form.Label>
								</Col>
								<Col>
									<Form.Control
										type="text"
										value={values.phoneNumber}
										onChange={handleChange}
										isInvalid={touched.phoneNumber && errors.phoneNumber}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.phoneNumber}
									</Form.Control.Feedback>
								</Col>
							</Row>
						</Form.Group>
						<Form.Group controlId="role">
							<Row>
								<Col sm="2">
									<Form.Label>Role</Form.Label>
								</Col>
								<Col>
									<Form.Control
										as="select"
										value={values.role}
										onChange={handleChange}
										isInvalid={touched.role && errors.role}
									>
										<option></option>
										<option value="admin">Admin</option>
										<option value="teacher">Teacher</option>
										<option value="student">Student</option>
									</Form.Control>
									<Form.Control.Feedback type="invalid">
										{errors.role}
									</Form.Control.Feedback>
								</Col>
							</Row>
						</Form.Group>
						<Form.Group>
							<Button variant="success" type="submit">
								Save
							</Button>
						</Form.Group>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default UserForm;
