import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { UserCard } from "../../@components";
import { getStudents } from './api/get-students';

function Students() {
    const [students, setStudents] = useState(null);
    useEffect(() => { getStudents({ setStudents }); }, []);
    if (!students)
        return <Container><Spinner animation="border" color="secondary" size="lg" style={{ position: "absolute", top: "25vw", left: "50vw" }} /></Container>;
    return (
        <Container>
            <Row>
                {students.map((student, index) => (
                    <Col md={6} key={index}>
                        <UserCard key={index} name={student.name} email={student.email} phone={student.phone} />
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default Students;
