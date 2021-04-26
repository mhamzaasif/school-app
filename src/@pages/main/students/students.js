import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Route, useRouteMatch } from "react-router";
import { Switch } from "react-router-dom";
import { UserCard, Loader } from "../../../@components";
import UserProfile from "../user-profile/user-profile";
import { getStudents } from "./api/get-students";

function Students() {
	const [students, setStudents] = useState(null);
	const { path } = useRouteMatch();
	useEffect(() => {
		getStudents({ setStudents });
	}, []);
	if (!students) return <Loader />;
	return (
		<Switch>
			<Route exact path={path}>
				<Row className="p-0 m-0">
					{students.map((student, index) => (
						<Col md={6} lg={4} key={index}>
							<UserCard
								key={index}
								id={student.id}
								name={student.name}
								email={student.email}
								phone={student.phone}
							/>
						</Col>
					))}
				</Row>
			</Route>
			<Route path={`${path}/:id`}>
				<UserProfile />
			</Route>
		</Switch>
	);
}

export default Students;
