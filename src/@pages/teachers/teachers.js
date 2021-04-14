import React, { useState, useEffect } from "react";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import { UserCard } from "../../@components";
import { apis } from "../../@services";
import "./teachers.css";
function Teachers() {
    const [teacherData, setTeachers] = useState(null);
    useEffect(() => {
        const getTeachers = async () => {
            const { data } = await apis.getAllTeachers();
            setTeachers(data.teachers);
        };
        getTeachers();
    }, []);
    if (!teacherData)
        return <Container><Spinner animation="border" color="secondary" size="lg" style={{ position: "absolute", top: "25vw", left: "50vw" }} /></Container>;
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
