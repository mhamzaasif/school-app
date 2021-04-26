import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { Loader, UserCard } from "../../../@components";
import { apis } from "../../../@services";
import UserProfile from "../user-profile/user-profile";
import "./teachers.css";
function Teachers() {
	const { path } = useRouteMatch();
	const [teacherData, setTeachers] = useState(null);
	useEffect(() => {
		const getTeachers = async () => {
			const { data } = await apis.getAllTeachers();
			setTeachers(data);
		};
		getTeachers();
	}, []);
	if (!teacherData) return <Loader />;
	return (
		<Switch>
			<Route exact path={path}>
				<Row className="p-0 m-0">
					{teacherData.map((teacher, index) => {
						return (
							<Col md={6} lg={4} key={index}>
								<UserCard
									key={index}
									id={teacher.id}
									name={teacher.name}
									email={teacher.email}
									phone={teacher.phone}
								/>
							</Col>
						);
					})}
				</Row>
			</Route>
			<Route path={`${path}/:id`}>
				<UserProfile />
			</Route>
		</Switch>
	);
}

export default Teachers;
