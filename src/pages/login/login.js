import React, { useState, useContext } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import { userContext } from "../../context/user-context";
import { apis } from "../../services";
import "./login.css";


function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useContext(userContext);
    const login = async (username, password) => {
        console.log(username, password, props);
        const { data } = await apis.login({ username, password });
        // console.log(resp);
        loginUser(data);
        props.history.push("/");
    };

    return (
        <Container fluid>
            <div className="form-wrapper">
                <Form className="form-body">
                    <Form.Group>
                        {/* <Form.Label>Username</Form.Label> */}
                        <Form.Control name="username" size="lg" placeholder="username" value={username} onChange={e => { console.log(e.target.value); setUsername(e.target.value); }} />
                    </Form.Group>
                    <Form.Group>
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control name="password" size="lg" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Button block size="lg" variant="success" onClick={() => login(username, password)}>Login</Button>
                    </Form.Group>
                </Form>
            </div>

        </Container>
    );
}

export default Login;
