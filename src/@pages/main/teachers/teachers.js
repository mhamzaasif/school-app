import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { LoadingWrapper, UserCard } from "../../../@components";
import { apis } from "../../../@services";
import UserProfile from "../user-profile/user-profile";
import "./teachers.css";
function Teachers() {
	const { path } = useRouteMatch();
	const [teacherData, setTeachers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getTeachers = async () => {
			try {
				setIsLoading(true);
				const { data } = await apis.getAllTeachers();
				setIsLoading(false);
				setTeachers(data);
			} catch (error) {
				setIsLoading(false);
				setError(error);
			}
		};
		getTeachers();
	}, []);
	return (
		<LoadingWrapper loading={isLoading} error={error}>
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
		</LoadingWrapper>
	);
}

export default Teachers;
