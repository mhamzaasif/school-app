import React, { useState, useEffect } from 'react';
import { Row, Spinner, Container, Col } from "react-bootstrap";
import { DataTable } from "../";
import { apis } from "../../@services";
import "./super-admin-dashboard.css";
function SuperAdminDashboard() {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        const get = async () => {
            const { data: studentsData } = await apis.getAllStudents();
            setStudents(studentsData.students);
            const { data: teachersData } = await apis.getAllTeachers();
            setTeachers(teachersData.teachers);
            const { data: adminsData } = await apis.getAllAdmins();
            setAdmins(adminsData.admins);
        };
        get();
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h4>Students</h4>
                    <div className="dashboard-table">
                        {students.length ? <DataTable data={students} onDelete={() => console.log("onDelete called")} onUpdate={() => console.log("onUpdate Called")} /> : <Spinner variant="secondary" animation="border" />}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Teachers</h4>
                    <div className="dashboard-table">
                        {teachers.length ? <DataTable data={teachers} onDelete={() => console.log("onDelete Called")} onUpdate={() => console.log("onUpdate Caleed")} /> : <Spinner animation="border" variant="secondary" />}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Admins</h4>
                    <div className="dashboard-table">
                        {admins.length ? <DataTable data={admins} onDelete={() => console.log("onDelete Called")} onUpdate={() => console.log("onUpdate Called")} /> : <Spinner animation="border" variant="secondary" />}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SuperAdminDashboard;