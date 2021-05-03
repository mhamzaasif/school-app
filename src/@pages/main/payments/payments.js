import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Form, Button, Toast } from "react-bootstrap";
import { LoadingWrapper } from "../../../@components";
import { getAllPayments } from "./api";

const Payments = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
		getAllPayments({ setLoading, setError });
	}, []);

	return (
		<LoadingWrapper loading={loading} error={error}>
			<h1 className="text-center">Payments</h1>
			<Formik
				initialValues={{ amount: "", duesID: "", date: "" }}
				onSubmit={(values, actions) => {
					console.log("[sumbitted payment]", values);
					setShowToast(true);
					actions.resetForm({ values: { amount: "", duesID: "", date: "" } });
				}}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					handleReset,
					isSubmitting,
				}) => (
					<Form onSubmit={handleSubmit} onReset={handleReset}>
						<Form.Group controlId="amount">
							<Form.Label>Amount</Form.Label>
							<Form.Control
								type="number"
								value={values.amount}
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group controlId="duesID">
							<Form.Label>Dues ID</Form.Label>
							<Form.Control
								type="text"
								value={values.duesID}
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group controlId="date">
							<Form.Label>Date</Form.Label>
							<Form.Control
								type="date"
								value={values.date}
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className="text-right">
							<Button
								variant="danger"
								type="reset"
								disabled={isSubmitting}
								className="mx-2"
							>
								Cancel
							</Button>
							<Button
								variant="success"
								type="submit"
								disabled={isSubmitting}
								className="mx-2"
							>
								Make Payment
							</Button>
						</Form.Group>
					</Form>
				)}
			</Formik>
			<Toast
				show={showToast}
				autohide
				delay={3000}
				onClose={() => setShowToast(false)}
				style={{ position: "absolute", top: 0, right: 0 }}
				variant="success"
				className="text-success"
			>
				<Toast.Header>
					<strong>Success</strong>
				</Toast.Header>
				<Toast.Body>Payment made successfully!</Toast.Body>
			</Toast>
		</LoadingWrapper>
	);
};

export default Payments;
