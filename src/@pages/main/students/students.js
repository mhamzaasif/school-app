import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { UserCard, Loader } from "../../../@components";
import { getStudents } from "./api/get-students";

function Students() {
	const [students, setStudents] = useState(null);
	useEffect(() => {
		getStudents({ setStudents });
	}, []);
	if (!students) return <Loader />;
	return (
		<Row style={{ height: "100vh", overflow: "auto" }}>
			{students.map((student, index) => (
				<Col md={6} lg={4} key={index}>
					<UserCard
						key={index}
						name={student.name}
						email={student.email}
						phone={student.phone}
					/>
				</Col>
			))}
		</Row>
	);
}

export default Students;
