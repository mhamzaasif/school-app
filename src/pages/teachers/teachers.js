import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { UserCard } from "../../components";
import { apis } from "../../services";
import "./teachers.css";
function Teachers() {
    const [teacherData, setTeachers] = useState([]);
    useEffect(() => {
        const getTeachers = async () => {
            const { data } = await apis.getAllTeachers();
            setTeachers(data.teachers);
        };
        getTeachers();
    }, []);
    return (
        <Container>
            <Row>
                {
                    teacherData.map((teacher, index) => (
                        <Col md={6} key={index}><UserCard key={index} name={teacher.name} email={teacher.email} phone={teacher.phone} /></Col>
                    ))}
            </Row>
        </Container>
    );

}

export default Teachers;
