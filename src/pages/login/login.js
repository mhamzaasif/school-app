import React, { useContext } from 'react';
import { Formik } from "formik";
import { Container, Form, Button } from "react-bootstrap";
import { userContext } from "../../context/user-context";
import { apis } from "../../services";
import "./login.css";


function Login(props) {
    const context = useContext(userContext);

    const login = async (username, password) => {
        const { data } = await apis.login({ username, password });
        context.loginUser(data);
        props.history.push("/");
    };

    return (
        <Container fluid className="login-container">
            <div className="form-wrapper">
                <Formik initialValues={{ username: '', password: '' }} onSubmit={login}>
                    {({ values, handleChange, handleSubmit }) => (
                        <Form className="form-body" onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                {/* <Form.Label>Username</Form.Label> */}
                                <Form.Control name="username" size="lg" placeholder="username" value={values.username} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control name="password" size="lg" placeholder="password" value={values.password} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Button block size="lg" variant="success" type="submit">Login</Button>
                            </Form.Group>
                        </Form>
                    )}
                </Formik>
            </div>

        </Container>
    );
}

export default Login;
