import React from "react";
import { Card } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
// import "./user-card.css";

const UserCard = ({ name = "", email = "", phone = "" }) => {
	return (
		<Card className="text-center mb-2" bg="dark" text="light" border="light">
			<Card.Header>
				<PersonCircle size={50} />
			</Card.Header>
			<Card.Body>
				<Card.Text>Name : {name}</Card.Text>
				<Card.Text>Email : {email}</Card.Text>
				<Card.Text>Phone : {phone}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default UserCard;
