import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Loader, UserCard } from "../../../@components";
import { apis } from "../../../@services";
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
	if (!teacherData) return <Loader />;
	return (
		<>
			<Row style={{ height: "100vh", overflow: "auto" }}>
				{teacherData.map((teacher, index) => (
					<Col md={6} lg={4} key={index}>
						<UserCard
							key={index}
							name={teacher.name}
							email={teacher.email}
							phone={teacher.phone}
						/>
					</Col>
				))}
			</Row>
		</>
	);
}

export default Teachers;
