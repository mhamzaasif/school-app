import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { PersonCircle, Trash2, PencilSquare } from "react-bootstrap-icons";

import "./user-card.css";

const UserCard = ({ id, name = "", email = "", phone = "" }) => {
	const { url } = useRouteMatch();
	return (
		<Card
			className="text-center mb-2 user-card"
			bg="light"
			text="dark"
			border="dark"
		>
			<Link to={`${url}/${id}`}>
				<Card.Header className="text-center">
					<PersonCircle size={50} />
				</Card.Header>
				<Card.Body className="text-left">
					<Card.Text>
						<strong>Name :</strong> {name}
					</Card.Text>
					<Card.Text>
						<strong>Email :</strong> {email}
					</Card.Text>
					<Card.Text>
						<strong>Phone :</strong> {phone}
					</Card.Text>
				</Card.Body>
			</Link>
			<Card.Footer>
				<Button className="m-1 card__button-delete" variant="danger">
					Delete <Trash2 />
				</Button>
				<Button className="m-1 card__button-update" variant="info">
					Update <PencilSquare />
				</Button>
			</Card.Footer>
		</Card>
	);
};

export default UserCard;
