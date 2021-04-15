import React from "react";
import { Modal, ModalBody, Spinner } from "react-bootstrap";
import "./loader.css";

const Loader = () => {
	return (
		<Modal show={true} backdrop="static" keyboard="false" centered>
			<ModalBody>
				<div className="loader-wrapper">
					<Spinner
						animation="border"
						variant="dark"
						style={{ height: "10rem", width: "10rem" }}
					/>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default Loader;
