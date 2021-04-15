import React, { useContext } from "react";
import { Formik } from "formik";
import { loginSchema } from "../../../@services";
import { Container, Form, Button } from "react-bootstrap";
import { rootContext } from "../../../@context";
import "./login.css";

const Login = ({ history }) => {
	const { loginUser } = useContext(rootContext);

	return (
		<Container fluid className="login-container">
			<div className="form-wrapper">
				<Formik
					initialValues={{ username: "", password: "" }}
					onSubmit={({ username, password }) =>
						loginUser({ username, password, history })
					}
					validationSchema={loginSchema}
				>
					{({ values, handleChange, handleSubmit, errors, touched }) => (
						<Form className="form-body" onSubmit={handleSubmit}>
							<Form.Group controlId="username">
								<Form.Control
									name="username"
									size="lg"
									placeholder="username"
									value={values.username}
									onChange={handleChange}
									isInvalid={touched.username && errors.username}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.username}
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group controlId="password">
								<Form.Control
									name="password"
									size="lg"
									placeholder="password"
									value={values.password}
									onChange={handleChange}
									isInvalid={touched.password && errors.password}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.password}
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group>
								<Button block size="lg" variant="success" type="submit">
									Login
								</Button>
							</Form.Group>
						</Form>
					)}
				</Formik>
			</div>
		</Container>
	);
};

export default Login;
